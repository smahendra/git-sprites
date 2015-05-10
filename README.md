# SVG Sprites & More (Auto CSS generation & PNG Fallback)

##Environment Setup:
Below are instructions to get up and running with the tool on your local machine. 'sudo' below in the commands is for MAC OS X you would not need 'sudo' for Windows machines.

Step 1 ) Install the latest version of NodeJS: http://nodejs.org. You can also install node.js via command line tool of your choice (PowerShell, Terminal, Bash etc). Open your command line tool of choice and run: sudo npm install npm -g
Note: Make sure you have it installed node.js globally. This will enable you to run npm directives. If you have node.js and Grunt skip to step 3.

Step 2) Once node is installed you will need to install Grunt : http://gruntjs.com/getting-started 
The easiest way is to follow these steps: Open your command line tool of choice and run: sudo npm install -g grunt-cli

Excellent! You now have Node and Grunt installed on your system and ready to go.

Step 3 ) Once you are in the project directory, type in the following command: sudo npm install

Step 4 ) Now all packages have been included into a 'node_modules' directory. Once this is complete type 'grunt' into the command line and we are up and running.

That is it. You can now generate SVG sprites plus more.

##Features:
1. Generates SVG sprite from individaul SVG's.
2. Outputs CSS to help with generating CSS for your projects.
3. Compresses SVG sprite using 'grunt-svgmin' npm module.
4. Creates a fallback PNG file. You need to compress the PNG - try Tiny PNG.

##Config Options:
After cloning a copy of this repository to your local machine you can make changes to the local Grunt file for tool configuration changes. Some helpful config changes below.

1. Create Vertical, Horizontol or Package SVG Sprite. Open your 'Gruntfile.js' and find 'layout' object in 'CSS' section. Layout can be changed to "vertical", "horizontal", "diagonal" or "packed".
```
css: {
       layout: 'packed',
       render: {
        css : true
        }
     }
```

This tool uses the following npm packages:
    "grunt-contrib-clean"
    "grunt-svg-sprite"
    "grunt-svg2png"
    "grunt-svgmin"

tested with - node: v0.12.2 and v0.10.33.
