var batLevel = 0;

navigator.getBattery().then(function(battery) {

    battery.addEventListener('levelchange', function() {
        updateLevelInfo();
    });
    
    function updateLevelInfo() {
        var batteryL = battery.level;
        console.log("Battery level: " + battery.level * 100 + "%");
        batLevel = batteryL * 10;
        document.getElementById("BatteryLevel").innerHTML = '<h1>' + Math.floor(batLevel * 10) + '%</h1>';
    }

    updateLevelInfo();
});