var constraints = {video: {facingMode: "user"}, audio: false
};

const cameraView=document.querySelector("#camera--view:),
cameraOUtput = document.querySelector("#camera--output"),
cameraSensor = document.querySelector("#camera--sensor"),
cameraTrigger = document.querySelector("#camera--trigger")


function cameraStart(){
    navigator.mediaDevices.getUserMedia(contraints).then(function(stream){
        track=stream.getTracks()[0];

        cameraView.srcObject = stream;
    })
    .catch(function(error){console.error("Oops.something is broken.", error);});
    

    cameraTrigger.onclick = function()
    { cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    
    cameraSensor.getContext("2d".drawImagee(cameraView, 0, 0);
    cameraOutput.src= cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");};



    window.addEventListener("load", cameraStart, false);