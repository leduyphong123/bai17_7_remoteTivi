function Remote(id) {
    this.id = id;
    this.nextKenh = function (value) {
        this.tivi.nextKenh(value);
    }
    this.volurmUp = function () {
        this.tivi.volurmUp();
    }
    this.volurmDown = function () {
        this.tivi.volurmDown();
    }
    this.setTivi = function (tivi) {
        this.tivi = tivi
    }
    this.setStatus = function () {
        this.tivi.setStatus();
    }
}
function Tivi() {
    this.status = false;
    this.volurm = 100;
    this.showKenh = function () {
        if (this.status == true) {
            document.write("kenh: " + this.kenh);
        }
    }
    this.showVolurm = function () {
        if (this.status == true) {
            document.write("volurm : " + this.volurm);
        }
    }
    this.showStatus = function () {
        if (this.status == true) {
            document.write("status : " + this.status);
        }
    }
    this.nextKenh = function (kenh) {
        if (this.status == true) {
            this.kenh = kenh;
        }
    }
    this.volurmUp = function () {
        if (this.status == true) {
            this.volurm += 1;
        }
    }
    this.volurmDown = function () {
        if (this.status == true) {
            this.volurm -= 1;
        }
    }
    this.setStatus = function () {
        if (this.status == true) {
            this.status = false;
        } else {
            this.status = true;
        }
    }
}

let tivi = new Tivi();
let remote = new Remote();
tivi.setStatus();
tivi.nextKenh(7);
tivi.showKenh();
remote.setTivi(tivi);
remote.nextKenh(3);
tivi.showKenh();
tivi.volurmUp();
tivi.volurmUp();
remote.setStatus();