function AddToCart(a) {
    //var url = $(location).attr('hostname')+'/cart?id='+a;
    var url = 'http://demo3.skyvietnam.vn/M001/cart?id='+a;
    $.ajax({
        type:"GET",
        url: url,
        success: function (data) {
            $('body').append(data);
        }
    });
}
function RemoveFromCart(a) {
    if(confirm("Bạn có muốn xóa sản phẩm này trong giỏ hàng của bạn?")){
        var url = 'http://demo3.skyvietnam.vn/M001/delete?id='+a;
        $.ajax({
            type:"GET",
            url: url,
            success: function (data) {
                location.reload();
            }
        });
    }
    return false;
}