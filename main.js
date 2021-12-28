function start(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5cLBbHqMR/model.json", modelReady)
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        r = Math.floor(Math.random() * 150) + 1
        g = Math.floor(Math.random() * 150) + 1
        b = Math.floor(Math.random() * 150) + 1
        
        document.getElementById("answer").innerHTML = results[0].label
        document.getElementById("accuracy").innerHTML = (results[0].confidence * 100).toFixed(2) + "%"

        document.getElementById("answer").style.color = "rgb("+r+","+g+","+b+")"
        document.getElementById("accuracy").style.color = "rgb("+r+","+g+","+b+")"

        img = document.getElementById("alien1")
        img2 = document.getElementById("alien2")
        img3 = document.getElementById("alien3")
        img4 = document.getElementById("alien4")

        answer = results[0].label

        if(answer == "Background Noise"){
            img.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        else if(answer == "Clap"){
            img.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        else if(answer == "Clap"){
            img.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png"
        }
        else{
            img.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif"
        }
    }
}