$(document).ready(function() {
    // Create an Audio object for the "colde" image
    var coldeAudio = new Audio('colde.mp3');

    $('#colde').click(function() {
        // Toggle between the original and alternative sources
        var currentSrc = $(this).attr('src');
        var originalSrc = $(this).attr('data-original');
        var altSrc = $(this).attr('data-alt');
        
        if (currentSrc === originalSrc) {
            // If the image is in the "data-original" state, pause the audio
            coldeAudio.play();
        } else {
            // If the image is in the "data-alt" state, play the audio
            coldeAudio.pause();
        }

        // Toggle between the original and alternative sources
        $(this).attr('src', currentSrc === altSrc ? originalSrc : altSrc);
    });

    var ichikoAudio = new Audio('ichiko.mp3');

    $('#ichiko').click(function() {
        // Toggle between the original and alternative sources
        var currentSrc = $(this).attr('src');
        var originalSrc = $(this).attr('data-original');
        var altSrc = $(this).attr('data-alt');
        
        if (currentSrc === originalSrc) {
            // If the image is in the "data-original" state, pause the audio
            ichikoAudio.play();
        } else {
            // If the image is in the "data-alt" state, play the audio
            ichikoAudio.pause();
        }

        // Toggle between the original and alternative sources
        $(this).attr('src', currentSrc === altSrc ? originalSrc : altSrc);
    });

    var cornerAudio = new Audio('corner.mp3');

    $('#corner').click(function() {
        // Toggle between the original and alternative sources
        var currentSrc = $(this).attr('src');
        var originalSrc = $(this).attr('data-original');
        var altSrc = $(this).attr('data-alt');
        
        if (currentSrc === originalSrc) {
            // If the image is in the "data-original" state, pause the audio
            cornerAudio.play();
        } else {
            // If the image is in the "data-alt" state, play the audio
            cornerAudio.pause();
        }

        // Toggle between the original and alternative sources
        $(this).attr('src', currentSrc === altSrc ? originalSrc : altSrc);
    });

    var lampAudio = new Audio('lamp.mp3');

    $('#lamp').click(function() {
        // Toggle between the original and alternative sources
        var currentSrc = $(this).attr('src');
        var originalSrc = $(this).attr('data-original');
        var altSrc = $(this).attr('data-alt');
        
        if (currentSrc === originalSrc) {
            // If the image is in the "data-original" state, pause the audio
            lampAudio.play();
        } else {
            // If the image is in the "data-alt" state, play the audio
            lampAudio.pause();
        }

        // Toggle between the original and alternative sources
        $(this).attr('src', currentSrc === altSrc ? originalSrc : altSrc);
    });

     var roccoAudio = new Audio('rocco.mp3');

    $('#rocco').click(function() {
        // Toggle between the original and alternative sources
        var currentSrc = $(this).attr('src');
        var originalSrc = $(this).attr('data-original');
        var altSrc = $(this).attr('data-alt');
        
        if (currentSrc === originalSrc) {
            // If the image is in the "data-original" state, pause the audio
            roccoAudio.play();
        } else {
            // If the image is in the "data-alt" state, play the audio
            roccoAudio.pause();
        }

        // Toggle between the original and alternative sources
        $(this).attr('src', currentSrc === altSrc ? originalSrc : altSrc);
    });
});

