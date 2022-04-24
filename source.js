// Nessa lib o http:// e https:// do link tem que ser alterado para ws:// ou wss://
// Aqui se cria a conexão com o servido
const ws = new WebSocket("ws://msger-server.herokuapp.com/")

// Função execudada quando a conexão é criada ("aberta")
ws.onopen = function(e) {
    console.log("Connected!")
    // Envia mesagens pro servido
    ws.send("Hello server!")
}

// Função execudada quando se recebe a mensagem 
ws.onmessage = function(e) {
    // Mensagem pode ser  acessado com e.data
    console.log(e.data)
}

ws.onerror = function(e) {
    console.log(e)
    ws.close()
}


/*
Objeto mensagem recebida 
A mensagem fica no campo data

{
isTrusted: true
bubbles: false
cancelBubble: false
cancelable: false
composed: false
currentTarget: WebSocket {url: 'ws://localhost:4449/', readyState: 1, bufferedAmount: 0, onopen: ƒ, onerror: ƒ, …}
data: "Hello server!"
defaultPrevented: false
eventPhase: 0
lastEventId: ""
origin: "ws://localhost:4449"
path: []
ports: []
returnValue: true
source: null
srcElement: WebSocket {url: 'ws://localhost:4449/', readyState: 1, bufferedAmount: 0, onopen: ƒ, onerror: ƒ, …}
target: WebSocket {url: 'ws://localhost:4449/', readyState: 1, bufferedAmount: 0, onopen: ƒ, onerror: ƒ, …}
timeStamp: 9744.5
type: "message"
userActivation: null
}
*/