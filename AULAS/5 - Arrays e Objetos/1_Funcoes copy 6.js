const Dialogs = require('dialogs')
const dialogs = Dialogs()
const { ipcRenderer, shell } = require('electron');
const axios = require('axios').default;
const si = require('systeminformation');
const exec = require('child_process').exec;

let listaCacheResult
let listaPlaylistResult
let firstRoute = 0;

const modal = () => {
    dialogs.prompt("Digite o Hash da máquina:", ok => {
        if (ok !== undefined) {
            configFile.hash = ok
            fs.writeFileSync(`${config_folder}/settings.json`, JSON.stringify(configFile));
            ipcRenderer.send('relaunch-app');
        }

        window.close();
    })
};

const verifyHash = (isInvalid) => {
    $("#messageError").append(`
    <p>
        ${isInvalid ?
            'Sua máquina foi bloqueada, por favor atualize sua hash!' :
            'Sua máquina está com hash inválido!'
        }
    </p>
`);

    $("#messageError").append(`<button id="fireModal">Atualize sua hash</button>`);

    document.getElementById('fireModal').onclick = function () {
        modal();
    };
}

const a1 = () => {
    if (configFile.hash === "" || configFile.hash?.length < 6 || !configFile.hash) {
        modal();
    }

    if (configFile.hash !== "" || configFile.hash?.length > 6 || configFile.hash) {
        return $.ajax({
            url: listaCache, method: 'GET', statusCode: {
                401: () => verifyHash(),
                403: () => verifyHash(true),
                500: function () {
                    console.error('Desculpe aconteceu um erro em nossos servidores');
                }
            }
        })
    }
}

const a2 = () => {
    if (configFile.hash !== "" || configFile.hash?.length > 6 || configFile.hash) {
        let result = $.ajax({
            url: listaPlaylist, method: 'GET', statusCode: {
                401: () => verifyHash(),
                500: function () {
                    console.error('Desculpe aconteceu um erro em nossos servidores');
                }
            }
        });

        return result
    }
}

const configWebcam = async () => {
    let { data } = await axios.get(urlWebcam)
    const duration = data.duracao_video * 1000;
    const periocidade = data.periodicidade_video * 60000;

    configFile.webcam = data.webcam;
    configFile.durationVideoWebcam = duration;
    configFile.timeWebcam = periocidade
    fs.writeFileSync(`${config_folder}/settings.json`, JSON.stringify(configFile));
}

const executeCommand = (command) => {
    exec(command, (error, stdout, stderr) => {
        if (error) return console.log('Error ao executar comando', error);
    });
}

const checkingCommands = async () => {
    try {
        const commandsURL = `${configFile.protocol}${configFile.host}/publicador/maquinas/comandos/${configFile.hash}`

        const response = await fetch(commandsURL, {
            method: "GET"
        });

        if (!response.ok) {
            console.error('Algo errado na requisição.');
        }

        const data = await response.json();

        data.geral.map(async (command) => {
            if (command.key === 3) {
                ipcRenderer.send('relaunch-app');
            }

            if (command.key === 2) {
                if (process.platform === 'linux') {
                    executeCommand('sleep 1 && xset dpms force off');
                } else if (process.platform === "win32") {
                    shell.openPath(".\\turn-off-monitor.bat");
                }
            }

            if (command.key === 4) {
                // Disco Rigido
                const diskData = si.fsSize().then(data => data.map(hd => {
                    const size = hd.size / 1048576;
                    const used = hd.used / 1048576;
                    const free = size - used;

                    const result = {
                        totalSize: size,
                        usedSize: used,
                        freeSize: free
                    }

                    return result;
                }));

                // CPU
                const cpuData = si.cpu().then(data => data);

                // Memória ram
                const memData = si.mem().then(data => {
                    const size = data.total / 1048576;
                    const used = data.used / 1048576;
                    const free = data.free / 1048576;

                    const result = {
                        totalSize: size,
                        usedSize: used,
                        freeSize: free
                    }

                    return result;
                });

                const jsonBody = {
                    cpu: await cpuData,
                    memoryData: await memData,
                    discData: await diskData,
                }

                const result = JSON.stringify(jsonBody);
                const date = new Date();
                const name = `${date.getUTCFullYear()}_${date.getUTCMonth() + 1}_${date.getUTCDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`

                setTimeout(() => {
                    fs.writeFileSync(info_folder + `/LOG_${configFile.hash}_${name}.txt`, result);

                    fs.readFile(`${info_folder}/${`LOG_${configFile.hash}_${name}.txt`}`, (err, data) => {
                        if (err) throw err;

                        const result = new Blob(data, { type: "text/plain" });

                        const formData = new FormData();
                        formData.append('capture', result, `LOG_${configFile.hash}_${name}.txt`);
                        axios.post(urlFile, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        });
                    });
                }, 12000);
            }
        });

    } catch (err) {
        console.error('Sua requisição falhou:', err);
    }
}

function FormataStringData(data) {
    var result = data.split('/').reverse().join('-');
    return result
}

var sequenciaGrade = () => {
    maxLength = listLengthSequencial.length !== 0 ? Math.max.apply(null, listLengthSequencial)
        : Math.max.apply(null, listLengthNoticia)

    var incrementAux = 0;
    var incrementAux2 = 0;
    var incrementSequencial = 0;
    var incrementNoticia = 0;

    let newPlaylist = [];

    for (let w = 0; w < maxLength; w++) {
        for (let i = 0; i < ordemGrade.length; i++) {
            if (ordemGrade[i] === "SEQUENCIAL") {
                if (listSequencial[incrementSequencial][incrementAux] !== undefined) {
                    playlistFinal.push(listSequencial[incrementSequencial][incrementAux])

                    newPlaylist = playlistFinal.reduce((acc, current) => {
                        const x = acc.find(item => item.id === current.id);
                        if (!x) {
                            return acc.concat([current]);
                        } else {
                            return acc;
                        }
                    }, []);

                    if (listSequencial[incrementSequencial][incrementAux + 1] !== undefined) {
                        if (incrementSequencial === listSequencial.length - 1) {
                            incrementAux++
                        }
                    } else {
                        increment = 0;
                    }
                }

                if (incrementSequencial === listSequencial.length - 1) {
                    incrementSequencial = 0
                } else {
                    incrementSequencial++
                }

            } else if (ordemGrade[i] === "NOTICIA") {
                if (listNoticia[incrementNoticia][incrementAux2] !== undefined) {
                    playlistFinal.push(listNoticia[incrementNoticia][incrementAux2])

                    newPlaylist = playlistFinal.reduce((acc, current) => {
                        const x = acc.find(item => item.id === current.id);
                        if (!x) {
                            return acc.concat([current]);
                        } else {
                            return acc;
                        }
                    }, []);

                    if (listNoticia[incrementNoticia][incrementAux2 + 1] !== undefined) {
                        incrementAux2++
                    } else {
                        incrementAux2 = 0
                    }
                }
            }
        }
    }

    return newPlaylist
}

var procAjax = (a1, a2) => {
    // processamento do primeiro ajax
    fs.writeFileSync(cache_playlist + '/lista_cache.txt', a1[0])
    var lista_cache = fs.readFileSync(cache_playlist + '/lista_cache.txt', "utf8");

    listaCacheResult = lista_cache
    info.info(`Exibindo listaCache ${listaCacheResult}`)
    let lines = listaCacheResult.split('\n')
    // Remove último index vazio
    lines.splice(-1, 1)
    $.each(lines, (index, value) => {
        let md5String = value.split(',')
        md5[index] = md5String[3];
        let res2 = value.split(',')
        // Remove index de md5
        res2.splice(-1, 1)
        // Remove último char
        res2[0] = res2[0].slice(0, -1)
        res2 = res2.join('/')
        tempMidia.push(res2)
        tempMidia = [... new Set(tempMidia)]
    })

    increment = 0;
    downMidias(increment);

    fs.writeFileSync(cache_playlist + '/playlist.json', JSON.stringify(a2[0]));
    var jsonData = fs.readFileSync(cache_playlist + '/playlist.json', "utf8");
    listaPlaylistResult = JSON.parse(jsonData)
    // processamento do segundo ajax
    // Organiza grade

    $.each(listaPlaylistResult.grade, (gradeIndex, grade) => {
        $.each(listaPlaylistResult.conteudo, (conteudoIndex, conteudo) => {
            if (grade.nome !== conteudoIndex) {
                return;
            }

            if (conteudo.itens.length <= 0) {
                error.info(`Conteúdo ${grade.nome} vazio`)
            }

            if (conteudo.id_tipo_conteudo === "2") {
                listSequencial.push(conteudo.itens)
                listLengthSequencial.push(conteudo.itens.length * 2)
                ordemGrade.push("SEQUENCIAL")
            }

            if (conteudo.id_tipo_conteudo === "4") {
                listNoticia.push(conteudo.itens)
                listLengthNoticia.push(conteudo.itens.length * 2)
                ordemGrade.push("NOTICIA")
            }

            listPlaylistTemp.push(conteudo.itens)
        })
    })

    playlistMedia = sequenciaGrade()

    playlistMedia = playlistMedia.filter(value => {
        var separarDataInicio = value.inicio.split(' ')
        var dataConvertidaInicio = FormataStringData(separarDataInicio[0])
        var juntarDataHoraInicio = dataConvertidaInicio + ' ' + separarDataInicio[1]
        var dataInicioValue = new Date(juntarDataHoraInicio)

        var separarDataFim = value.fim.split(' ')
        var dataConvertidaFim = FormataStringData(separarDataFim[0])
        var juntarDataHoraFim = dataConvertidaFim + ' ' + separarDataFim[1]
        var dataFimValue = new Date(juntarDataHoraFim)
        var dataHoje = new Date()

        return dataFimValue.getTime() ? dataHoje.getTime() >= dataInicioValue.getTime()
            && dataHoje.getTime() < dataFimValue.getTime() : dataHoje.getTime() >= dataInicioValue.getTime()
    })

    cotacao = listaPlaylistResult.cambio
    bolsa = listaPlaylistResult.bolsas
    acao = listaPlaylistResult.acao
    $.each(listaPlaylistResult.clima, (climaIndex, climaItem) => {
        clima = climaItem
    })
}

var procAjax2 = () => {
    var lista_cache = fs.readFileSync(cache_playlist + '/lista_cache.txt', "utf8");

    listaCacheResult = lista_cache
    info.info(`Exibindo listaCache ${listaCacheResult}`)
    let lines = listaCacheResult.split('\n')
    // Remove último index vazio
    lines.splice(-1, 1)
    $.each(lines, (index, value) => {
        let md5String = value.split(',')
        md5[index] = md5String[3];
        let res2 = value.split(',')
        // Remove index de md5
        res2.splice(-1, 1)
        // Remove último char
        res2[0] = res2[0].slice(0, -1)
        res2 = res2.join('/')
        tempMidia.push(res2)
        tempMidia = [... new Set(tempMidia)]
    })

    var jsonData = fs.readFileSync(cache_playlist + '/playlist.json', "utf8");
    listaPlaylistResult = JSON.parse(jsonData)
    // processamento do segundo ajax
    info.info(`Exibindo listaPlaylist: ${listaPlaylistResult}`)
    // Organiza grade
    $.each(listaPlaylistResult.grade, (gradeIndex, grade) => {
        $.each(listaPlaylistResult.conteudo, (conteudoIndex, conteudo) => {
            if (grade.nome === conteudoIndex) {
                if (conteudo.itens.length > 0) {
                    if (conteudo.id_tipo_conteudo === "2") {
                        listSequencial.push(conteudo.itens)
                        listLengthSequencial.push(conteudo.itens.length * 2)
                        ordemGrade.push("SEQUENCIAL")
                    }
                    if (conteudo.id_tipo_conteudo === "4") {
                        listNoticia.push(conteudo.itens)
                        listLengthNoticia.push(conteudo.itens.length * 2)
                        ordemGrade.push("NOTICIA")
                    }

                    listPlaylistTemp.push(conteudo.itens)
                } else {
                    error.info(`Conteúdo ${grade.nome} vazio`)
                }
            }
        })
    })

    playlistMedia = sequenciaGrade()

    playlistMedia = playlistMedia.filter(value => {
        var separarDataInicio = value.inicio.split(' ')
        var dataConvertidaInicio = FormataStringData(separarDataInicio[0])
        var juntarDataHoraInicio = dataConvertidaInicio + ' ' + separarDataInicio[1]
        var dataInicioValue = new Date(juntarDataHoraInicio)

        var separarDataFim = value.fim.split(' ')
        var dataConvertidaFim = FormataStringData(separarDataFim[0])
        var juntarDataHoraFim = dataConvertidaFim + ' ' + separarDataFim[1]
        var dataFimValue = new Date(juntarDataHoraFim)
        var dataHoje = new Date()

        return dataFimValue.getTime() ? dataHoje.getTime() >= dataInicioValue.getTime()
            && dataHoje.getTime() < dataFimValue.getTime() : dataHoje.getTime() >= dataInicioValue.getTime()
    })

    cotacao = listaPlaylistResult.cambio
    bolsa = listaPlaylistResult.bolsas
    acao = listaPlaylistResult.acao
    $.each(listaPlaylistResult.clima, (climaIndex, climaItem) => {
        clima = climaItem
    })
}

key('d o w n', function (e) {
    $.when(a1(), a2()).then((a1, a2) => {
        playlistFinal = []
        playlistMedia = []
        ordemGrade = []
        procAjax(a1, a2)
        if (firstRoute === 0) {
            routeMedia()
            firstRoute = 1
        }
    }, () => {
        playlistFinal = []
        playlistMedia = []
        ordemGrade = []
        procAjax2()
        if (firstRoute === 0) {
            routeMedia()
            firstRoute = 1
        }
    })
});

// Then retorna ou sucesso ou fracasso, enquanto done somente sucesso
$.when(a1(), a2()).then((a1, a2) => {
    procAjax(a1, a2)
    configWebcam();

    timeoutRouteMedia = setTimeout(function run() {
        console.log(`Terminou download ${increment} de ${tempMidia.length - 1}`)

        timeoutRouteMedia = setTimeout(run, 3000);

        if (configFile.downloadFinished) {
            routeMedia()
            firstRoute = 1
            clear();
        }
    }, 1000);

    function clear() {
        clearTimeout(timeoutRouteMedia)
    }

}, () => {
    procAjax2()
    routeMedia()
    firstRoute = 1
})

if (increment === 0 && configFile.downloadFinished) {
    setInterval(() => {
        $.when(a1(), a2()).then((a1, a2) => {
            playlistFinal = []
            playlistMedia = []
            ordemGrade = []
            procAjax(a1, a2)
            if (firstRoute === 0) {
                routeMedia()
                firstRoute = 1
            }
        });
    }, timeAjax)
} else {
    setInterval(() => {
        $.when(a1(), a2()).then((a1, a2) => {
            playlistFinal = []
            playlistMedia = []
            ordemGrade = []
            procAjax(a1, a2)
            if (firstRoute === 0) {
                routeMedia()
                firstRoute = 1
            }
        }, () => {
            playlistFinal = []
            playlistMedia = []
            ordemGrade = []
            procAjax2()
            if (firstRoute === 0) {
                routeMedia()
                firstRoute = 1
            }
        })
    }, timeAjax);
};

setInterval(() => {
    checkingCommands();
}, 120000);