var BMN = BMN || {};


//This allows you to add more text to your add_authors API call.
BMN.addRow = function() {
    $('#fields_div').append("Author : <input type='text' name='author' required > Text : <textarea name='text' rows='8' cols='78' required style='vertical-align: baseline; display: inline-block'></textarea>")

}

BMN.deleteAuthor = function() {
    var id = $("#author_id").val();
    var username = $("input[name='j_username']").val();
    var pwd = $("input[name='j_password']").val();
    $.ajax({
        type: 'post',
        url: "https://bpc.bmedianet.com/personality-api/1/remove_author.json?ID=" + id+"&j_username="+username+"&j_password="+pwd,
        data:{ID: id},
        cache: false,
        async: true,
        success: function(data, textStatus, jqXHR) {
            alert("data saved"+data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("error:" + jqXHR.responseText);
        }
    });
}

BMN.getAllAuthors = function() {
    var count = $("#count").val();
    var timeline = $('input[name=timeline]:checked').val();
    var traits = '';
    var username = $("input[name='j_username']").val();
    var pwd = $("input[name='j_password']").val();
    $("input[name=traits]:checked").each(
        function() {
           traits = traits+$(this).val();
        }
    );

    $.ajax({
        type: 'get',
        url: "https://bpc.bmedianet.com/personality-api/1/all_authors.json?count=" + count+"&timeline="+timeline+"&traits="+traits+"&j_username="+username+"&j_password="+pwd,
        cache: false,
        success: function(data, textStatus, jqXHR) {
            alert("response is ::::"+JSON.stringify(data));
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("error:" + jqXHR.responseText);
        }
    });
}

BMN.getAuthorsByPersonality = function() {
    var count = $("#count").val();
    var timeline = $('input[name=timeline]:checked').val();
    var e = $('input[name=extraversion]:checked').val();
    var s = $('input[name=emotionalstability]:checked').val();
    var a = $('input[name=agreeableness]:checked').val();
    var c = $('input[name=conscientiousness]:checked').val();
    var o = $('input[name=openness]:checked').val();
    var username = $("input[name='j_username']").val();
    var pwd = $("input[name='j_password']").val();
    var traits = '';
    $("input[name=traits]:checked").each(
        function() {
           traits = traits+$(this).val();
        }
    );

    $.ajax({
        type: 'get',
        url: "https://bpc.bmedianet.com/personality-api/1/authors_by_personality.json?count=" + count+"&timeline="+timeline+"&traits="+traits+"&Extraversion="+e+"&EmotionalStability="+s+"&Agreeableness="+a+"&Conscientiousness="+c+"&Openness="+o+"&j_username="+username+"&j_password="+pwd,
        cache: false,
        success: function(data, textStatus, jqXHR) {
            alert("response is ::::"+JSON.stringify(data));
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("error:" + jqXHR.responseText);
        }
    });
}

BMN.getAuthor = function() {
    var id = $("#author_id").val();
    var username = $("input[name='j_username']").val();
    var pwd = $("input[name='j_password']").val();
    $.ajax({
        type: 'get',
        url: "https://bpc.bmedianet.com/personality-api/1/author.json?ID=" + id+"&j_username="+username+"&j_password="+pwd,
        cache: false,
        success: function(data, textStatus, jqXHR) {
            alert("response is ::::"+JSON.stringify(data));
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("error:" + jqXHR.responseText);
        }
    });
}


BMN.createJsonInputString = function (authorArray, textArray, today) {
    var uniqueAuthors = [];
    $.each(authorArray, function(i, author){
        if($.inArray(author, uniqueAuthors) === -1)
            uniqueAuthors.push(author);
    });
    var text = "{";
   /* text = text+'"NumAuthors" : "'+uniqueAuthors.length+'",';
    text = text+'"AuthorsData": {';*/
    jQuery.each(uniqueAuthors, function(i, author) {
        if(i > 0)
            text = text+',"'+author+'":{';
        else
            text = text+'"'+author+'":{';
        var isSecond = false;
        for(var j = 0; j < authorArray.length; j++) {
            if(authorArray[j] === author) {
                if(isSecond)
                    text = text+',"'+today+'":"'+textArray[j]+'"';
                else
                    text = text+'"'+today+'":"'+textArray[j]+'"';
                isSecond = true;
            }
        }

        text = text+'}'
    });

    text = text+"}";
    //text = text+"}";
    return text;
};
BMN.submitData = function() {
    var today = new Date().toString();
    today = today.substr(0, today.indexOf(" ("));

    var authorArray = $("input[name='author']")
        .map(function(){return $(this).val();}).get();
    var textArray = $("textarea[name='text']")
        .map(function(){return $(this).val();}).get();
    var text = BMN.createJsonInputString(authorArray, textArray, today);
    var username = $("input[name='j_username']").val();
    var pwd = $("input[name='j_password']").val();
    $.ajax({
        type: 'post',
        url: "https://bpc.bmedianet.com/personality-api/1/add_authors.json",
        data:{text: text,
            j_username: username,
            j_password: pwd
            },
        cache: false,
        async: true,
        success: function(data, textStatus, jqXHR) {
            alert("data saved"+JSON.stringify(data));
            window.location = "./index.html"
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("error:" + jqXHR.responseText);
        }
    });
    return false;
}

