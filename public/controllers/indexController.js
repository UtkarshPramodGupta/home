var codeMirrorEnabled = [];
var langTabSelected = 'js';
var featureSelected = 'storage';

//Initialization
$(document).ready(function(){ 

	hideAllCode();   
    $('#div-storage-js').show();
    $(".storagefeat").addClass('activatefeat');
    $(".jstab").addClass('activatelang');
    initCodeEditors( ['storage-js']);

    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('Visted Home Page', {"visited":"visited Home Page"});
      /****End of Tracking*****/
    }  
});
//Initialization


//Functions
$(".each-feature-wrap").click(function () {
    $(".each-feature-wrap").each(function(){
        $(this).removeClass('activatefeat');
    });

    $(this).addClass('activatefeat');
    var featureName=$(this).data('featname');        
    featureClick(featureName);

    $(".introrap").remove();
    var introJson=feautureIntroText(featureName);

    var introHtml='<div class="introrap">';
        introHtml+='<div class="intro1">';
            introHtml+='<span style="color:#159CEE;font-size:26px;font-weight:100;line-height:27px;">'+introJson.intro1+'</span>';
        introHtml+='</div>';

        introHtml+='<div class="intro2" style="margin-top:12px;">';
           introHtml+='<span style="color:#383838;font-size:16px;">'+introJson.intro2+'</span>'; 
        introHtml+='</div>';
    introHtml+='</div>';

    $(".todos-explain").html(introHtml);
});

$(".lang-fliprlabel").click(function(event){
    event.preventDefault();

    $(".lang-fliprlabel").each(function(){
        $(this).removeClass('activatelang');
    });

    $(this).addClass('activatelang');

    var langName=$(this).data("langname");
    languageClick(langName);
});

var languageClick = function(lang){
    hideAllCode();
    langTabSelected = lang;    
    featureClick(featureSelected);   
};

var featureClick = function(feature){   
    hideAllCode(); 
    var WidgetId=feature+'-'+langTabSelected;    
    $('#div-'+WidgetId).show();
    initCodeEditors( [WidgetId]);
    featureSelected = feature;       
};

var initCodeEditors = function(arr){
    var codeEditors = arr;

    for(var i=0;i<codeEditors.length; i++){

        if(document.getElementById(codeEditors[i]) && codeMirrorEnabled.indexOf(codeEditors[i]) === -1){

            var myCodeMirror = CodeMirror.fromTextArea(document.getElementById(codeEditors[i]),{
                mode:  "javascript",
                readOnly : true,
                lineNumbers: true
            });

            codeMirrorEnabled.push(codeEditors[i]);
        }
    }
};

var hideAllCode = function(){
    $('#div-storage-js').hide();
    $('#div-storage-nodejs').hide();
    $('#div-storage-java').hide();

    $('#div-search-js').hide();
    $('#div-search-nodejs').hide();
    $('#div-search-java').hide();

    $('#div-realtime-js').hide();
    $('#div-realtime-nodejs').hide();
    $('#div-realtime-java').hide();

    $('#div-queues-js').hide();
    $('#div-queues-nodejs').hide();
    $('#div-queues-java').hide();

    $('#div-cache-js').hide();
    $('#div-cache-nodejs').hide();
    $('#div-cache-java').hide();        
};

function feautureIntroText(featureName){
    var IntroJson={
        intro1:null,
        intro2:null
    };

    if(featureName=="storage"){
        IntroJson.intro1="Store documents, stream music & videos using CloudFiles.";
        IntroJson.intro2="We automatically process your files as soon as you upload them on CloudBoost, so they're always ready. Store documents, stream music or videos in near real-time.";
    }
    if(featureName=="search"){
        IntroJson.intro1="Implement search engine in your apps with CloudSearch.";
        IntroJson.intro2="Implementing a search engine in your app can never be much easier. We index your data for search and let your users use our CloudSearch feature to get most accurate and relevant data as possible.";
    }
    if(featureName=="realtime"){
        IntroJson.intro1="Build realtime apps, effortlessly.";
        IntroJson.intro2="When data changes, apps built with CloudBoost update instantly across every device -- web or mobile. Get an instant notification when data is inserted, updated, or deleted.";
    }
    return IntroJson;
}

/****************************************Mixpanel Area********************************************************************/
$("#header-signupbtn").click(function(){
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('Landing Header Sign Up Button', {"Clicked":"Sign up for free"});
      /****End of Tracking*****/
    }
});

$("#header-loginbtn").click(function(){
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('Landing Header Login Button', {"Clicked":"Login"});
      /****End of Tracking*****/
    }
}); 

$("#home-body-signup-btn").click(function(){
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('HomePage Body Sign Up Button', {"Clicked":"HomePage Body Sign Up Button"});
      /****End of Tracking*****/
    }
});

$("#home-body-quickstart-btn").click(function(){
    if(!__isDevelopment){
      /****Tracking************/            
       mixpanel.track('HomePage Body QuickStart Button', {"Clicked":"HomePage Body QuickStart Button"});
      /****End of Tracking*****/
    }
}); 

 
