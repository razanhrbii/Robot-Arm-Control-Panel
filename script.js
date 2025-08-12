const motors = [
    document.getElementById('motor1'),
    document.getElementById('motor2'),
    document.getElementById('motor3'),
    document.getElementById('motor4'),
    document.getElementById('motor5'),
    document.getElementById('motor6')
];

// تحديث القيم عند تحريك السلايدرز
motors.forEach((slider, index) => {
    slider.oninput = function() {
        document.getElementById(`m${index+1}Val`).textContent = this.value;
    };
});

function savePose() {
    const data = new FormData();
    motors.forEach((slider, index) => {
        data.append(`motor${index+1}`, slider.value);
    });

    fetch('save_pose.php', {
        method: 'POST',
        body: data
    })
    .then(response => response.text())
    .then(msg => {
        alert(msg);
        loadPoses(); // إعادة تحميل البيانات بعد الحفظ
    });
}

// جلب جميع الوضعيات من قاعدة البيانات
function loadPoses() {
    fetch('get_poses.php')
    .then(res => res.json())
    .then(data => {
        const table = document.getElementById('poseTable');
        table.innerHTML = "";
        data.forEach(pose => {
            table.innerHTML += `
                <tr>
                    <td>${pose.id}</td>
                    <td>${pose.motor1}</td>
                    <td>${pose.motor2}</td>
                    <td>${pose.motor3}</td>
                    <td>${pose.motor4}</td>
                    <td>${pose.motor5}</td>
                    <td>${pose.motor6}</td>
                    <td><button onclick="updateStatus(${pose.id})">Set 0</button></td>
                </tr>
            `;
        });
    });
}

// تحديث حالة status إلى 0
function updateStatus(id) {
    const data = new FormData();
    data.append('id', id);

    fetch('update_status.php', {
        method: 'POST',
        body: data
    })
    .then(res => res.text())
    .then(msg => {
        alert(msg);
        loadPoses();
    });
}

// زر Reset لإعادة القيم الافتراضية
function resetSliders() {
    motors.forEach((slider, index) => {
        slider.value = 90;
        document.getElementById(`m${index+1}Val`).textContent = 90;
    });
}

// تحميل البيانات عند فتح الصفحة
document.addEventListener("DOMContentLoaded", loadPoses);

// تشغيل الوضعية الحالية (status = 1)
function runPose() {
    fetch('get_poses.php')
    .then(res => res.json())
    .then(data => {
        const pose = data.find(p => p.status == 1);
        if (pose) {
            alert(`Running Pose ID: ${pose.id}
Motors: ${pose.motor1}, ${pose.motor2}, ${pose.motor3}, ${pose.motor4}, ${pose.motor5}, ${pose.motor6}`);
        } else {
            alert("No active pose found!");
        }
    });
}