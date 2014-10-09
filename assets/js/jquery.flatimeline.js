
/*
 * 
 * 
 * flaTimeline.js - http://www.danielepetrarolo.com/lab/flaTimeline.js
 * Version: 1.1.1
 * Author: Daniele Petrarolo - http://www.danielepetrarolo.com
 * 
 * 
 * 
 * Copyright (c) 2014 Daniele Petrarolo
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * 
 * 
 */



(function($) {

    $.fn.flaTimeline = function(options) {
    	
    	var $timeline = $(this);
    	var $events = $timeline.find('li.event');
    	
    	$timeline.find('li.event .content').wrap('<div class="contentWrapper"></div>');
		$timeline.find('li.event .contentWrapper').prepend('<div class="circle"></div>');
		
    	var settings = $.extend({
    		toggle: true,
    		toggleSpeed: 300,
    		toggleEasing: 'swing',
            eventColor: '#999',
            gridColor: '#DDD',
            borderRadius: '0px',
    		onStart: function(){},
    		onComplete: function(){},
    		onOpeningStart: function(){},
    		onOpeningComplete: function(){},
    		onClosingStart: function(){},
    		onClosingComplete: function(){}
        }, options);
        
        
        function toggleEvent($event){
			if($event.hasClass('open')){
				onClosingStart();
				$event.stop().removeClass('open');
				$event.find('.contentWrapper .content .text').stop().slideToggle({duration: toggleSpeed, easing: toggleEasing, start: onStart, done: onClosingComplete, complete: onComplete});
			}else{
				onOpeningStart();
				$event.stop().addClass('open');
				$event.find('.contentWrapper .content .text').stop().slideToggle({duration: toggleSpeed, easing: toggleEasing, start: onStart, done: onOpeningComplete, complete: onComplete});
			}
       };
        
        function checkParent(){
			var $parent = $timeline.parent();
			var parentW = $parent.width();
			if(parentW <= 650){
				$timeline.addClass('mobile');
			} else{
				$timeline.removeClass('mobile');
			}
		};
        
        function darkColor(color, percent) {
        	var color = color.replace(/^\s*#|\s*$/g, '');
        	if(color.length == 3){
		        color = color.replace(/(.)/g, '$1$1');
		    }
			color = '#' + color;
		    var R = parseInt(color.substring(1,3),16);
		    var G = parseInt(color.substring(3,5),16);
		    var B = parseInt(color.substring(5,7),16);
		    R = parseInt(R * (100 + percent) / 100);
		    G = parseInt(G * (100 + percent) / 100);
		    B = parseInt(B * (100 + percent) / 100);
		    R = (R<255)?R:255;  
		    G = (G<255)?G:255;  
		    B = (B<255)?B:255;  
		    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
		    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
		    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));
		
		    return "#"+RR+GG+BB;
		};
		
		
		if(settings.toggle){
        	if(settings.toggle == false){
        		var toggle = false;
        	} else{
        		var toggle = true;
        	}
        }
        if(settings.toggleSpeed){
        	var toggleSpeed = settings.toggleSpeed;
        }
        if(settings.toggleEasing){
        	var toggleEasing = settings.toggleEasing;
        }
        if(settings.onStart){
        	var onStart = settings.onStart;
        }
        if(settings.onComplete){
        	var onComplete = settings.onComplete;
        }
        if(settings.onOpeningStart){
        	var onOpeningStart = settings.onOpeningStart;
        }
        if(settings.onOpeningComplete){
        	var onOpeningComplete = settings.onOpeningComplete;
        }
        if(settings.onClosingStart){
        	var onClosingStart = settings.onClosingStart;
        }
        if(settings.onClosingComplete){
        	var onClosingComplete = settings.onClosingComplete;
        }
        if(settings.eventColor){
        	var eventColor = settings.eventColor;
        }
        if(settings.gridColor){
        	var gridColor = settings.gridColor;
        }
        if(settings.borderRadius){
        	var borderRadius = settings.borderRadius;
        }
        
        
        /*/ --- LET'S START! --- /*/
        
        
        // toggle
        if(toggle){
	        $events.click(function(){
				var $event = $(this);
				toggleEvent($event);
			});
		}

        
        // style
        $timeline.find('.contentWrapper, .date, .circle').andSelf().css({
        	'border-color': gridColor
        });
        
        var borderColor = darkColor(eventColor, -20);

		$events.find('.contentWrapper .content').css({
			'background': eventColor,
			'border-color': borderColor,
			'border-radius': borderRadius
		});
		
		
		// mobile check
		checkParent();
		$(window).resize(function(){
			checkParent();
		});

   };

}(jQuery));