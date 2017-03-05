/*document.getElementById('txtTieude').value = tieuDe;
document.getElementById('tarNoidung').value = noiDung;
document.getElementById('cboCatePost').value = '283';
document.getElementById('hddCatePost').value = '283';
document.getElementById('cboCityPost').value = 'ĐN';
document.getElementById('hddCityPost').value = 'ĐN';
html = '<option value="48"> Ngũ Hành Sơn </option>';
       document.getElementById('cboDistrictPost').innerHTML=html;

document.getElementById('cboDistrictPost').value = 48;
document.getElementById('hddistrictPost').value = 48;

document.getElementById('txtDiadiem').value = 'Ngũ Hành Sơn, Đà Nẵng';
document.getElementById('txtDientich').value = 90;
*/

$("#txtTieude").val(tieuDe)
$("#tarNoidung").val(noiDung)
$("#cboCatePost").val("283")
$("#hddCatePost").val("283")
$("#cboCityPost").val('DDN')
$("#hddCityPost").val('DDN')
_html = '<option value="48"> Ngũ Hành Sơn </option>';
       $('#cboDistrictPost').html(_html);
$('#cboDistrictPost').val('48');
$('#hddDistrictPost').val('48');
$("#txtDiadiem").val(' Ngũ Hành Sơn, Đà Nẵng')
$("#hddDiadiem").val(' Ngũ Hành Sơn, Đà Nẵng')
$("#txtDientich").val(dienTich)
$("#hddUnitPost").val("0")
