$(function() {

    'use strict';

  $('.form-control').on('input', function() {

      var $field = $(this).closest('.form-group');

      if (this.value) {

        $field.addClass('field--not-empty');

      } else {

        $field.removeClass('field--not-empty');

      }

    });

});

$(document).ready(function(){
    var checkU = false;
    var index = -1;
    var listTenDangNhap = new Array("itstudent", "itforstudent", "gtnm");
    var listMatKhau = new Array( "123","12345","1234");
 $('#tendangnhap').blur(function(){
    var tendangnhap = $('#tendangnhap').val();

    //alert(listTenDangNhap[0]):
    //var listMatkhau = new Array("123"."12345","1234");
for(var i = 0; i < listTenDangNhap.length; i++) {
      if(tendangnhap==listTenDangNhap[i]){
        checkU = true;
        index = i;
        break;
      }else{
        checkU=false;
      }
    }

 if(checkU==true){
   alert("Username hợp lệ");
 }else {
    alert("usemame không tồn tại");
 }
});

 $('#matkhau').blur(function(){
    var checkM = false;
    var matkhau = $('#matkhau').val();
    //var listTenDangNhap = new Array("itstudent"."itforstudent","gtnm"):
    //alert(listTenDangNhap[0]):
if (matkhau==listMatKhau[index]){
      alert("Đăng nhập thành công");
 } else{
      alert("Sai mật khẩu");
    }
});

});

