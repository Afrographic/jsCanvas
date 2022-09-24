const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;

// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 100)
// ctx.fillStyle = 'blue';
// ctx.fillRect(190, 20, 150, 100)

// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect(100, 200, 150, 100);

// ctx.clearRect(25, 25, 100, 100)

// ctx.fillStyle = 'black';
// ctx.font = '30px Arial';
// ctx.fillText('I love her a lot', 10, 50)
// ctx.font = '12px Arial';
// ctx.fillText('I love her a lot',10,80)

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(75, 200);
// ctx.closePath();
// ctx.fillStyle = 'coral';
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200, 5);
// ctx.lineTo(210, 25)
// ctx.lineTo(200, 200);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 200, 100, 0, Math.PI, false)
// ctx.stroke();

/* Animation with Canvas */
const circle = {
    x: 200,
    y: 200,
    radius: 30,
    dx: 5,
    dy: 4
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'purple';
    ctx.fill();
}

// function update() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle();
//     circle.x += circle.dx;
//     circle.y += circle.dy;

//     // Detect side Walls
//     if (circle.x+circle.radius > canvas.width || circle.x - circle.radius < 0) {
//         circle.dx *= -1;
//     }

//     // Detect top and bottom walls
//     if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
//         circle.dy *= -1;
//     }

//     requestAnimationFrame(update);
// }

const image = document.getElementById("image");
function drawImage() {
    ctx.drawImage(image, 0, 0, image.clientWidth, image.clientHeight)
}
drawImage();


function exportCanvas() {
    const imgURL = canvas.toDataURL("image/png");
    downloadFile(imgURL)
    console.log(convertDataURlToFile(imgURL));
}

function downloadFile(filePath) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = "logo.png"
    link.click();
}

function convertDataURlToFile(dataURI) {
    const blob = dataURItoBlob(dataURI);
    const resultFile = new File([blob], "file_name.png");
    return resultFile;
}


function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
}

