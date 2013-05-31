var PRA = PRA || {};


//This allows you to add more text to your add_authors API call.
PRA.addRow = function() {
    $('#fields_div').append("Author : <input type='text' name='author' required > Text : <textarea name='text' rows='8' cols='78' required style='vertical-align: baseline; display: inline-block'></textarea>")

}

PRA.deleteAuthor = function() {
    var id = $("#author_id").val();
    $.ajax({
        type: 'post',
        url: "/bmn-personality-api-skeleton-ror/delete_author",
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

PRA.getAllAuthors = function() {
    var count = $("#count").val();
    var timeline = $('input[name=timeline]:checked').val();
    var traits = '';
    $("input[name=traits]:checked").each(
        function() {
           traits = traits+$(this).val();
        }
    );

    $.ajax({
        type: 'get',
        url: "/bmn-personality-api-skeleton-ror/get_all_authors?count=" + count+"&timeline="+timeline+"&traits="+traits,
        cache: false,
        success: function(data, textStatus, jqXHR) {
            alert("response is ::::"+data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("error:" + jqXHR.responseText);
        }
    });
}

PRA.getAuthorsByPersonality = function() {
    var count = $("#count").val();
    var timeline = $('input[name=timeline]:checked').val();
    var e = $('input[name=extraversion]:checked').val();
    var s = $('input[name=emotionalstability]:checked').val();
    var a = $('input[name=agreeableness]:checked').val();
    var c = $('input[name=conscientiousness]:checked').val();
    var o = $('input[name=openness]:checked').val();
    var traits = '';
    $("input[name=traits]:checked").each(
        function() {
           traits = traits+$(this).val();
        }
    );
    
    $.ajax({
        type: 'get',
        url: "/bmn-personality-api-skeleton-ror/get_authors_by_personality?count=" + count+"&timeline="+timeline+"&traits="+traits+"&Extraversion="+e+"&EmotionalStability="+s+"&Agreeableness="+a+"&Conscientiousness="+c+"&Openness="+o,
        cache: false,
        success: function(data, textStatus, jqXHR) {
            alert("response is ::::"+data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("error:" + jqXHR.responseText);
        }
    });
}

PRA.getAuthor = function() {
    var id = $("#author_id").val();
    $.ajax({
        type: 'get',
        url: "/bmn-personality-api-skeleton-ror/get_author?ID=" + id,
        cache: false,
        success: function(data, textStatus, jqXHR) {
            alert("response is ::::"+data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("error:" + jqXHR.responseText);
        }
    });
}


PRA.createJsonInputString = function (authorArray, textArray, today) {
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
PRA.submitData = function() {
    var today = new Date().toString();
    today = today.substr(0, today.indexOf(" ("));

    var authorArray = $("input[name='author']")
        .map(function(){return $(this).val();}).get();
    var textArray = $("textarea[name='text']")
        .map(function(){return $(this).val();}).get();
    var text = PRA.createJsonInputString(authorArray, textArray, today);
    $.ajax({
        type: 'post',
        url: "/bmn-personality-api-skeleton-ror/add_authors",
        data:{text: text},
        cache: false,
        async: true,
        success: function(data, textStatus, jqXHR) {
            alert("data saved"+data);
            window.location = "/"
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("error:" + jqXHR.responseText);
        }
    });
    return false;
}

