var animationsProperties = {
    btnClick: {
        width:"9%",
        paddingTop: "0.8rem",
        paddingBottom: "0.8rem",
        backgroundColor: "#65a6ed" 
    },
    btnRelease: {
        width:"10%",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backgroundColor: "#70b8e2" 
    }
}

var pageFunctionality={
    value: 0,
    onUpdate: function(){
        $("#numberOfTimes").html(pageFunctionality.value);
    },
    onBtnClick: function(){
        pageFunctionality.value++;
        pageFunctionality.onUpdate();
        
        pageFunctionality.clickAnimation($(this));
    },
    onRstClick: function(){
        pageFunctionality.value = 0;
        pageFunctionality.onUpdate();
        
        pageFunctionality.clickAnimation($(this));
    },
    clickAnimation: function(btn){
        var dur = 50;
        btn.animate(animationsProperties.btnClick, dur, "swing", function() {
            btn.animate(animationsProperties.btnRelease, dur, "swing", null);
        });
    }
};


$(document).ready(function(){
    $("#btn").click(pageFunctionality.onBtnClick);
    $("#reset").click(pageFunctionality.onRstClick);
});