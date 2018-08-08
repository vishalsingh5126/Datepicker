//$(function () {
//    $.ajaxSetup({ cache: false });

//    $("a[data-modal]").on("click", function (e) {
//        
//        $('#myModalContent').load(this.href, function () {
//            $('#myModal').modal({
//                keyboard: true
//            }, 'show');
//            bindForm(this);
//        });
//        return false;
//    });
//});

//function bindForm(dialog) {
//    $('form', dialog).submit(function () {
//        $.ajax({
//            url: this.action,
//            type: this.method,
//            data: $(this).serialize(),
//            success: function (result) {
//                if (result.success) {
//                    $('#myModal').modal('hide');
//                    loadDataTable(); //  Load data from the server and place the returned HTML into the matched element
//                } else {
//                    $('#myModalContent').html(result);
//                    bindForm(dialog);
//                }
//            }
//        });
//        return false;
//    });

//    function loadDataTable() {
//        var selProjectCode = $('#projectCode').val();

//        $.ajax({
//            cache: false,
//            url: "/QuickLink/SearchQuickLinks/",
//            type: "GET",
//            data: 'projectCode=' + selProjectCode,
//            success: function (result) {
//                $('#searchResult').html(result);
//            },
//            error: function (result) {
//                console.log("Hey!, there's an error here");
//            }
//        });
//    }
//            

//}