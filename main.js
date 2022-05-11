function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pi9i2H8IL/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}