# yogastorefront
Design a layout for a page that shows a list of products as the majority of the page and a shopping cart panel as a secondary element.

I need to accredit:
<a href="http://www.freepik.com/free-photos-vectors/logo">Logo vector designed by Kreativkolors - Freepik.com</a>

<div>Icons made by <a href="http://www.flaticon.com/authors/iconnice" title="Iconnice">Iconnice</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> shopping cart credit

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

color scheme: https://color.adobe.com/Yoga-color-theme-8538366/

font code:  https://theclientclass.com/google-font-combinations/

Learned about Modernizer here:  https://www.youtube.com/watch?v=IjxZcmEf_Uc

https://coderwall.com/p/u_ngaa/fallback-svg-to-png-in-img-element

Learned about SVG here:  https://css-tricks.com/scale-svg/ and https://css-tricks.com/using-svg/

Purchased a course on Foundation 6 & Sass at Udemy...went through all 26 hours

Went through a Javascript Shopping Cart Tutorial

My Problems Report:
Issues/Notes:
1.  I spent a lot of time on the visual aspect of this site.  Safest aspect I suppose.  
In another file(yogastorefront-I'll provide link), I set up SASS and Foundation.  I got lost
in the possiblities of Foundation.  I really want to dig deep into that!!!  So I watched
a tutorial on introduction to the grid here:

http://foundation.zurb.com/learn/introduction-to-the-foundation-grid.html
http://foundation.zurb.com/forum/posts/24690-new-article-5-ways-to-use-zurb-foundation

I found a great series on building a site up with Zurb:
https://www.youtube.com/watch?v=WlqTTBul7ik

I got really excited by Emmet, however I realized after conversation with you
that the end result was really bloated html.  I did appreciate how it layed out the 
grid and I could see using it as a reference if I feel lost.

2.  I really wanted to dig into building out a top-bar for my store with a drop down menu
just because.  I found a lot of tutorials to follow including:
http://zurb.com/building-blocks/f6-top-bar
http://foundation.zurb.com/sites/docs/v/5.5.3/components/topbar.html#clickable

I'm still not entirely clear on whether the stuff I find in the tutorial for Foundation 5
is still relevant for Foundation 6?  So I started to get a little lost in the differences
and decided to focus on the Javascript.  I realized there are a lot of really useful elements
and attributes when building out the bar:  data-options, data-top-bar-role, contain-to-grid,
$top-bar-sticky(scss)....

I also realized that I needed to upload the js file for top-bar...I got really frustrated
building out toggle menus and they didn't work!  Duh...realized I was missing this:
    <script src="js/foundation/foundation.js"></script>
    <script src="js/foundation/foundation.topbar.js"></script>

3. 