# Code Challenge for Infield Digital

### Environment
- Node + Gulp + Browsersync
- SCSS + Autoprefixer + Flexbox
- Vanilla HTML (Emett)
- Vanilla Javascript

##### Explanation
I chose to use gulp and browsersync because I wanted to see how quickly I could set up a new environment and get everything running smoothly, as well as have the ability to quickly test out mobile. I was also curious about using postcss/autoprefixer, having not had the pleasure before. At first, I'd contemplated using vanilla CSS, however I decided to develop in as minimal a modern environment as I thought fit in order to mimic some of the common tools that are most likely being used to develop your client sites and applications.

##### Process
I took a look at the PSD and decided that a single component on its own would be a bit bland and unrealistic, so I opted to add in a quick nav to give the component some company (component life can be lonely =/ ). I aimed to keep everything as modular and close to a proper project as possible. In a standard project, I generally isolate scss variables, helpers, etc., and spread things out a bit more in general, however I wanted to keep files to a minimum here, already having decided to use a build environment. The only note I have is: I am not a big fan of mysterious background images and strictly-defined heights to go with them. In most situations, I assume that image sizes would be standardized and would dictate the height of the area (card header/banner), as would the copy dictate the height of its area (card body).

##### No Webpack/React/Angular/Vue?!?!
Although I've completed a couple of courses with React and have a basic understanding of Vue, I'm not confident enough in my ability at this point to put either out front as a fully-integrated part of my skillset. To date, the most complex projects I've completed have utilized Node, Webpack, Express and MongoDB as the core. That being said, I also wanted to avoid copying over any boilerplate code from my previous projects and did not need support for JS transpiling, which is why I chose to create a gulp build over Webpack.

##### Tested on
- Chrome (Latest/Windows)
- Firefox (Latest/Windows)
- IE11
- iOS Safari (Latest/iPhone 6+)
- iOS Chrome (Latest/iPhone 6+)
- Android Chrome (Latest/SS Galaxy 6)

I didn't offer support for <IE10, however if that were required, I would have used floats instead of flexbox.
