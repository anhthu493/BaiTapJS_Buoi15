function diemTrugBinh(
  monThuNhat,
  monThuHai,
  monThuBa,
  diemUuTienKhuVuc,
  diemUuTienDoiTuong
) {
  return (
    (diemTrungBinh = monThuNhat + monThuHai + monThuBa) +
    diemUuTienDoiTuong +
    diemUuTienKhuVuc
  );
}
function tinhTienDien(soDien) {
  let giaTien = 0;

  if (soDien <= 50) {
    giaTien = soDien * 500;
  } else if (soDien <= 100) {
    giaTien = 50 * 500 + (soDien - 50) * 650;
  } else if (soDien <= 200) {
    giaTien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
  } else if (soDien <= 350) {
    giaTien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
  } else {
    giaTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
  }

  return giaTien;
}
document.getElementById("tinh").onclick = function () {
  var diemChuan = document.getElementById("diemchuan").value * 1;
  var diemThuNhat = document.getElementById("mon1").value * 1;
  var diemThuHai = document.getElementById("mon2").value * 1;
  var diemThuBa = document.getElementById("mon3").value * 1;
  var khuVuc = document.getElementById("khuvuc").value;
  var doiTuong = document.getElementById("doituong").value * 1;
  var diemTB;
  var diemKhuVuc;
  var diemDoiTuong;
  switch (khuVuc) {
    case "A":
      diemKhuVuc = 2;
      break;
    case "B":
      diemKhuVuc = 1;
      break;
    case "C":
      diemKhuVuc = 0.5;
      break;
    default:
      diemKhuVuc = 0;
      break;
  }
  switch (doiTuong) {
    case 1:
      diemDoiTuong = 2.5;
      break;
    case 2:
      diemDoiTuong = 1.5;
      break;
    case 3:
      diemDoiTuong = 1;
      break;
    default:
      break;
  }
  diemTB = diemTrugBinh(
    diemThuNhat,
    diemThuHai,
    diemThuBa,
    diemKhuVuc,
    diemDoiTuong
  );
  if (diemTB >= diemChuan) {
    document.getElementById(
      "ketquatuyensinh"
    ).innerHTML = `Đậu (Tổng điểm: ${diemTB})`;
  } else {
    document.getElementById("ketquatuyensinh").innerHTML = "Rớt";
  }
};
document.getElementById("tinhtiendien").onclick = function () {
  var ten = document.getElementById("ten").value;
  var soDien = document.getElementById("kw").value * 1;
  document.getElementById(
    "tongtien"
  ).innerHTML = `Tổng Số Tiền Điện của ${ten} là : ${tinhTienDien(soDien)} VND`;
};
document.getElementById("tinhtienthue").onclick = function () {
  var tenn = document.getElementById("tenthunhap").value;
  var thunhap = document.getElementById("tongthunhapnam").value * 1;
  var tongnguoi = document.getElementById("songuoi").value * 1;

  var tong = thunhap - 4 - tongnguoi * 1.6;
  if (tong <= 60) {
    document.getElementById("tongtienthue").innerHTML =
      tenn + " " + (tong * 5) / 100 + " " + "(Triệu)";
  } else {
    if (tong > 60 && tong <= 120) {
      document.getElementById("tongtienthue").innerHTML =
        tenn + " " + (tong * 10) / 100 + " " + "(Triệu)";
    } else {
      if (tong > 120 && tong <= 210) {
        document.getElementById("tongtienthue").innerHTML =
          tenn + " " + (tong * 15) / 100 + " " + "(Triệu)";
      } else {
        if (tong > 210 && tong <= 384) {
          document.getElementById("tongtienthue").innerHTML =
            tenn + " " + (tong * 20) / 100 + " " + "(Triệu)";
        } else {
          if (tong > 384 && tong <= 624) {
            document.getElementById("tongtienthue").innerHTML =
              tenn + " " + (tong * 25) / 100 + " " + "(Triệu)";
          } else {
            if (tong > 624 && tong <= 960) {
              document.getElementById("tongtienthue").innerHTML =
                tenn + " " + (tong * 30) / 100 + " " + "(Triệu)";
            } else {
              if (tong > 960) {
                document.getElementById("tongtienthue").innerHTML =
                  tenn + " " + (tong * 35) / 100 + " " + "(Triệu)";
              }
            }
          }
        }
      }
    }
  }
};

function input() {
  var option = document.getElementById("option").value;
  var inputField = document.getElementById("inputField");

  if (option === "option2") {
    inputField.style.display = "block";
  } else {
    inputField.style.display = "none";
  }
}

document.getElementById("option").addEventListener("change", input);

document.getElementById("tinhtiencap").onclick = function () {
  var ten = document.getElementById("makh").value;
  var loaikh = document.getElementById("option").value;
  var ketnoi = document.getElementById("soketnoi").value * 1;
  var sokenh = document.getElementById("sokenh").value * 1;

  if (loaikh === "option1") {
    var tienphi = 25 + sokenh * 7.5;
    document.getElementById(
      "tongtiencap"
    ).innerHTML = ` Tiền phí cáp của ${ten} là ${tienphi} VND`;
  } else {
    if (ketnoi <= 10) {
      var tienketnoi = ketnoi * 75;
      var tienphi = tienketnoi + 15 + sokenh * 50;
      document.getElementById(
        "tongtiencap"
      ).innerHTML = `Tiền phí cáp của ${ten} là ${tienphi} VND`;
    } else {
      var tienketnoi = 10 * 75 + (ketnoi - 10) * 5;
      var tienphii = tienketnoi + 15 + sokenh * 50;
      document.getElementById(
        "tongtiencap"
      ).innerHTML = ` Tiền phí cáp của ${ten} là ${tienphii} VND`;
    }
  }
};
