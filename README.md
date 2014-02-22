flaTimeline.js
==============
A responsive, animated and customizable flat timeline.



Introduction
=============
A simple jQuery plugin to create a responsive, animated and customizable timeline with a flat style. 


How it works?
============
- First of all include jQuery in your project, than add jquery.flatimeline.js and jquery.flatimeline.css to make the timeline works
```html
 <script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script> 
 <script type="text/javascript" src="assets/js/jquery.flatimeline.js"></script> 
 <link type="text/css" rel="stylesheet" href="assets/css/jquery.flatimeline.css" />
```
- Now, create a super-simple semantic HTML list: 
```html
<ul class="flaTimeline"> 
  <li class="event"> 
    <div class="date">The date of your event</div> 
    <div class="content"> 
      <div class="title">The title of your event</div> 
      <div class="text">The content of your event</div> 
    </div> 
  </li>
  <li class="event"> 
    <div class="date">The date of your event</div> 
    <div class="content"> 
      <div class="title">The title of your event</div> 
      <div class="text">The content of your event</div> 
    </div> 
  </li>
</ul>
```
- "Let her go!" [cit. Passenger] 
```html
<script type="text/javascript"> 
  $(document).ready(function(){ 
    $('ul.flaTimeline').flaTimeline(); 
  }); 
</script>
```


Options
==========
<table>
					<tr>
						<td><strong>Name</strong></td>
						<td><strong>Type</strong></td>
						<td><strong>Default</strong></td>
						<td><strong>Description</strong></td>
					</tr>
					<tr>
						<td><strong>toggle</strong></td>
						<td>boolean</td>
						<td>true</td>
						<td>Set if a single event can be open or not.</td>
					</tr>
					<tr>
						<td><strong>toggleSpeed</strong></td>
						<td>numeric</td>
						<td>300</td>
						<td>Set the speed of the animation that open the event to show its description.</td>
					</tr>
					<tr>
						<td><strong>toggleEasing</strong></td>
						<td>easing</td>
						<td>swing</td>
						<td>Set the easing of the animation that open the event to show its description.</td>
					</tr>
					<tr>
						<td><strong>color</strong></td>
						<td>color</td>
						<td>#999</td>
						<td>Set the color of the events box. A darker color is auto-sets for their bottom.</td>
					</tr>
					<tr>
						<td><strong>borderRadius</strong></td>
						<td>pixel</td>
						<td>0px</td>
						<td>Set the border radius of the events box.</td>
					</tr>
					<tr>
						<td><strong>onStart</strong></td>
						<td>function</td>
						<td>-</td>
						<td>Set a function that start at the begin of every opening/closing event.</td>
					</tr>
					<tr>
						<td><strong>onComplete</strong></td>
						<td>function</td>
						<td>-</td>
						<td>Set a function that start at the end of every opening/closing event.</td>
					</tr>
					<tr>
						<td><strong>onOpeningStart</strong></td>
						<td>function</td>
						<td>-</td>
						<td>Set a function that start when the opening event is started.</td>
					</tr>
					<tr>
						<td><strong>onOpeningComplete</strong></td>
						<td>function</td>
						<td>-</td>
						<td>Set a function that start when the opening event is completed.</td>
					</tr>
					<tr>
						<td><strong>onClosingStart</strong></td>
						<td>function</td>
						<td>-</td>
						<td>Set a function that start when the closing event is started.</td>
					</tr>
					<tr>
						<td><strong>onClosingComplete</strong></td>
						<td>function</td>
						<td>-</td>
						<td>Set a function that start when the closing event is completed.</td>
					</tr>
				</table>
				
				
License
==========

Copyright (c) 2014 Daniele Petrarolo

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
