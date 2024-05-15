
/* p5.js study 

  study from Udemy 3D basic with p5.js
	1. Basic
	2. 3D Shapes
	3. Rotate, Translate, Mapping and Loops in 3D shapes

*/



// *** Basic ***

		/* //canvas basic
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
			background(100);
		}

		function draw() {
		background(100)
			sphere(100)
		} */

		/* 
		// 3D coordinates
		let art;
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL) ;
			art=createGraphics(1000,1000);
		}
		function draw() {
			background(255);
			normalMaterial();
			push()
			translate(mouseX-600, mouseY-600)
			box(50)
			pop()
			coordinates()
		}

		function coordinates() {
			//Coordinates
			push()
			noStroke()
			texture(art)
			plane(1200,1200)
			pop()
			push()
				// Lines to show the x, y, z axis 
				push()
				//Red line for y-axis
				art.strokeWeight(2)
					art.stroke(255, 0, 0)
					art.line(500, 0, 500, height)
					//Green line for x-axis
					art.strokeWeight(2)
					art.stroke(0, 168, 0)
					art.line(0, 500, width, 500)
					//Blue line for x-axis
					art.strokeWeight(2)
					art.stroke(0, 0, 255)
					art.line(1100,-100,-100,1100)
					pop()
					//Text to show graduations on the respective coordinates. 
					push()
					art.stroke(255)
					art.fill(0)
					art.textSize(18)
					art.strokeWeight(1)
					// x-coordinates
					art.text('(X + ve)', 920, 540)
					art.text('(X - ve)', 20, 540)
					art.text('0', 505, 520)
					art.text('-1', 435, 520)
					art.text('-500', 10, 520)
					art.text('1', 540, 520)
					art.text('500', 960, 520)
					// y-coordinates
					art.text('(Y - ve)', 520, 50)
					art.text('(Y + ve)', 520, 970)
					art.text('-1', 470, 460)
					art.text('500', 460, 50)
					art.text('1', 480, 960)
					//z-coordianes
					art.text('(Z - ve)', 580, 460)
					art.text('(Z - ve)', 270, 660)
					pop()
				pop()
		}
		*/


/* *** 3D Shapes ***
		3D Box, 3D Sphere, 3D Cone, 3D Cylinder, 
		3D Torus, 3D Ellisoid, 3D Plane */
 
		/* //3d box
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
		}

		function draw() {
			background(255);
			orbitControl(100,100)
			//box(width, height, depth)
			box(100, 200, 50)
		} */


		/* //3d Sphere
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
			background(100);
		}

		function draw() {
			background(255);
			orbitControl(100,100)
			//sphere(radius, dtailX, dtailY)
			sphere(100, 24, 24)	

		} */


		/* //3d cone
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
			background(100);
		}

		function draw() {
			background(255);
			orbitControl(100,100)
			//cone(redius, height, ditailX, ditailY, cap)
			cone(100, 300, 24, true)
			// cone(100, 300, 6, 1, false)
		} */

		/* //3d Cylinder
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
		}

		function draw() {
			background(255);
			orbitControl(100, 100)
			//cylinder(radius, height, detailX, detailY, topCap, bottomCap)
			//cylinder(100, 300, 24, 1, true, true)
			//cylinder(100, 300, 5, 1, true, false)
			cylinder(100, 300, 10, 2, false, false)
		} */


		// 3d ellipsold
		/* function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
		}

		function draw() {
			background(255);
			orbitControl(100,100)
			//ellipsold(radiusx,radiusy, raidusz, detailX, detailY)
			// ellipsoid(50,100,50,24,16)
			ellipsoid(150,50,120,4,10)
		} */

		/* // 3d plane
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
		}

		function draw() {
			background(255);
			orbitControl(100,100)
			normalMaterial()
			//plane(width, height)
			plane(250,250)
		} */

/* *** Rotate, Translate, Mapping and Loops in 3D shapes ***
		Radians and Degrees, Rotate, Translate, Mapping, Loops */

		// Radians and Degrees
/* 		let a = 0
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
			// 
			angleMode(DEGREES);
		}

		function draw() {
			background(220);
			push()
			  spare()
			pop()
			// **Radians are angle measured in PI.
			// TWO_PI = 360 degrees
			// PI = 180 degrees
			// HALF_PI = 90 degrees
			// QUARTER_PI = 45 degrees 
			push()
			 pie(0,-300,360)
			pop()
			push()
			 pie(0,-100,180)
			pop()
			push()
			 pie(0,100,90)
			pop()
			push()
			 pie(0,300,45)
			pop()
			
		}
		function pie(x,y,angle) {
			push()
			  translate(x,y)
			  push()
			    torus(50,10,24,16)
			  pop()
			  push()
			    rotateZ(angle)
				cylinder(10,150,24,1,true,true)
				box(40)
			  pop()
		    pop()
		}
		function spare() {
			translate(-300,-300)
			rotateZ(a)
			torus(50,10,24,16)
			a+=0.5
		} */

		// Rotate
/* 		let angle = 0
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
		}
		function draw() {
			background(255);
			normalMaterial()
			push()
				rotateY(angle)
				// rotateX(angle)
				// rotateZ(angle)
					// rotate function have to come before the shape 
					// otherwise it doesnt work

				//torus(radius, tuberadius, detailX, detailY)
				torus(100, 20, 6, 16)
			pop()
			push()
				rotateX(angle)
				//cone(radius, height, detailX, detailY, cap)
				cone(30,-50,24,1,true)
			pop()
			angle += 0.03
		} */


		// Translate
/* 		let art
		function setup() {
			createCanvas(windowWidth, windowHeight,WEBGL);
			art=createGraphics(1000,1000)
			
		}
		function draw() {
			background(255);
			normalMaterial()
			push()
			  //translate(x,y)
			//   translate(-200,-200)
			  translate(-200,200)
			//   translate(200,-200)
			//   translate(200,200)
			  torus(40,10,5,16);
			pop()

			coordinates()
		}
		function coordinates(){
			//Coordinates
			push()
				noStroke()
				texture(art)
				plane(1200,1200)
			pop()
			push()
					// /*Lines to show the x, y, z axis
				  push()
					//Red line for y-axis
					art.strokeWeight(2)
					art.stroke(255, 0, 0)
					art.line(500, 0, 500, height)
					//Green line for x-axis
					art.strokeWeight(2)
					art.stroke(0, 168, 0)
					art.line(0 , 500, width, 500)
					pop()
					// /*Text to show graduations on the respective coordinates.
					push()
					art.stroke(255)
					art.fill(0)
					art.textSize(18)
					art.strokeWeight(1)
					//x-coordinates
					art.text('(X + ve)', 730, 540)
					art.text('(X - ve)', 225, 540)
					art.text('-500', 210, 520)
					art.text('0', 485, 520)
					art.text('-1', 435, 520)
					art.text('500', 735, 520)
					art.text('1', 540, 520)
					art.text('500', 960, 520)
					//y-coordinates
					art.text('(Y-ve)', 510, 200)
					art.text('(Y+ve)', 510, 780)
					art.text('-500', 440, 200)
					art.text('500', 440, 780)
					art.text('-1', 480, 460)
					art.text('-500', 450,50)
					art.text('1', 485,570)
					art.text('500', 460,960)
						
					pop()
			pop()
		
		} */

		// Mapping
/* 		let angle = 0
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
		}
		function draw() {
			background(255)
			//map(value, origial start, original stop
			//    new start, new stop, withinBounds)

			let breathe = map(sin(angle),1,-1,20,80,true)
			normalMaterial()
			torus(breathe,20,4,16)

			angle += 0.03
		} */

		// Loops
/* 		let angle = 0
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
		}

		function draw() {
			background(255);
			translate(-50,-250)
			push()
			for(let i =0; i<10; i++){
			  translate(i+50, i+50)
			  normalMaterial()
			  rotateZ(sin(angle))
			  rotateY(sin(angle))
			  cone(40, 50, 5, 1, true)
			  rotateX(sin(angle))
			  torus(60, 5, 24, 16)
			}
			pop()

			angle += 0.01
		} */

/* *** Combining chapes & adding interactivity ***
		Combining shapes to create spaceship, Interactivity using Key controls */

/* 		//Combining shapes to create spaceship
		//Combining 3D shapes
		let angle = 0
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL)
		}

		function draw() {
			background(100);
			push()
			  translate(mouseX-300,mouseY-300)
			  push()
			    fill(70,130,180)
				stroke(220)
				rotateY(angle)
				ellipsoid(30,100,30,24,16)
				cone(50,-100,16,1,true)
				cylinder(40,50,16,1,true,true)
			  pop()
		      push()
			    fill(0, 255, 255)
				stroke(220)
				rotateX(HALF_PI)
				rotateZ(angle)
				torus(60,20,24,10)
		      pop()
			pop()

			angle +=0.03

		} */

		//Key controls
		/*let angle = 0 
		let x = 0
		let y = 0
		let z = 0
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
		}
		function draw() {
			background(80);
			push()
			  translate(x, y, z)
			  push()
			    fill(70,130,180)
			    stroke(175)
			    rotateY(angle)
			    ellipsoid(30,100,30,24,16)
				cone(50,-100,16,1,true)
				cylinder(40,50,16,1,true,true)
			  pop()
			  push()
			    fill(0,255,255)
				stroke(175)
			    rotateX(HALF_PI)
			  	rotateZ(angle)
				torus(60,20,24,10)
		      pop()
			pop()
			angle +=0.03
			controls()
		}

		function controls() {
			if(keyCode == UP_ARROW){
				y -=5
			}
			if(keyCode == DOWN_ARROW){
				y +=5
			}
			if(keyCode == LEFT_ARROW){
				x -=5
			}
			if(keyCode == RIGHT_ARROW){
				x +=5
			}
			if(keyCode == 32){
				z +=5
			}
			if(keyCode == 13){
				z -=5
			}
		} */

/* *** Texturing 3D shapes ***
		Image Texture, Texturing spaceship, Texturing with 2D shape, Texturing with 2D generative art 1, 2, Texturing with text, Texturing with camera */

		// Image Texturing 
		/*let angle = 0 
		let pic
		function preload() {
			pic = loadImage('Gimon.jpg')
		}

		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
		}

		function draw() {
			background(255);
			  texture(pic)
			  rotateX(angle)
			  rotateY(angle)
			  rotateZ(angle)
			  box(200)

			angle += 0.03
		} */

		/*// Texturing spaceship
		let angle = 0 
		let x = 0
		let y = 0
		let z = 0
		let pic1 = 0 

		function preload() {
			pic1 = loadImage('Gimon.jpg')
			pic2 = loadImage('space1.jpg')
		}
		function setup() {
			createCanvas(windowWidth, windowHeight, WEBGL);
		}
		function draw() {
			background(3000);
			push()
			  texture(pic1)
			  noStroke()
			  rotateZ(-angle/60)
			  sphere(800)
			pop()
			push()
			  translate(x, y, z)
			  push()
			    //fill(000,000,000)
			    //stroke(175)
				noStroke()
				texture(pic1)
			    rotateY(angle)
			    ellipsoid(30,100,30,24,16)
				cone(50,-100,16,1,true)
				cylinder(40,50,16,1,true,true)
			  pop()
			  push()
			    //fill(0,000,000)
				//stroke(175)
				noStroke()
				texture(pic2)
			    rotateX(HALF_PI)
			  	rotateZ(angle)
				torus(60,20,24,10)
		      pop()
			pop()
			angle +=0.5
			controls()
		}

		function controls() {
			if(keyCode == UP_ARROW){
				y -=5
			}
			if(keyCode == DOWN_ARROW){
				y +=5
			}
			if(keyCode == LEFT_ARROW){
				x -=5
			}
			if(keyCode == RIGHT_ARROW){
				x +=5
			}
			if(keyCode == 32){
				z +=5
			}
			if(keyCode == 13){
				z -=5
			}
		} */


		//Textureing with 2D shape
		/* let angle = 0 
		let art 
		function setup() { 
			createCanvas(windowWidth, windowHeight, WEBGL);
			art = createGraphics(1000,1000)
		}

		function draw() {
			background(255)
			//2D shape
			push()
			  art.fill(80,0,mouseY)
			  art.strokeWeight(4)
			  art.stroke(mouseX,mouseY,0)
			  art.circle(mouseX,mouseY,300)
			pop()

			//3D shape
			push()
			  texture(art)
			  rotateX(angle)
			  rotateY(angle)
			  rotateZ(angle)
			  box(200)
			pop()

			angle+=0.03
		} */


		/*/
		/ Texturing with 2D generative art-1
		let angle = 0 
		let art 
		let r = 10
		let a = 0
		let gap = 20 
		function setup() { 
			createCanvas(windowWidth, windowHeight, WEBGL);
			art = createGraphics(400,400)
		}

		function draw() {
			background(255)
			//2D shape
			push()
			  // cos(a)= adj(x)/hyp(r)
			  // x = r * cos(a)
			  let x = r + gap * cos(a)
			  // sin(a) = opp(y)/hyp(r)
			  // y = r * sin(a)
			  let y = r + gap * sin(a)

			  art.strokeWeight(1)
			  art.stroke(0)
			  art.fill(255,0,0)
			  art.circle(x + 200, y + 200, 10)

			  a += 0.03
			  gap += 0.05
			pop()

			//3D shape
			push()
			  //noStroke()
			  texture(art)
			  rotateX(angle)
			  rotateY(angle)
			  rotateZ(angle)
			  box(250)
			pop()

			angle+=0.06
		} */

		
		/*
		// Texturing with 2D generative art -2
		let angle = 0 
		let art 
		let r = 10
		let a = 0
		let gap = 20 
		function setup() { 
			createCanvas(windowWidth, windowHeight, WEBGL);
			art = createGraphics(400,400)
		}

		function draw() {
			background(255)
			let slide_a = map(mouseX,0,width-600,0.2,0.08)

			two_d(art,slide_a)
			three_d(art)
			
			angle+=0.009
		}
		function two_d(art, slide_a){
		  push()
			// cos(a)= adj(x)/hyp(r)
			// x = r * cos(a)
			let x = r + gap * cos(a)
			// sin(a) = opp(y)/hyp(r)
			// y = r * sin(a)
			let y = r + gap * sin(a)

			art.strokeWeight(1)
			art.stroke(0)
			art.fill(255,a,gap)
			art.circle(x + 200, y + 200, 10)

			a += slide_a
			gap += 0.03
		  pop()
		}
		function three_d(art){
		  push()
			//noStroke()
			texture(art)
			rotateX(angle)
			rotateY(angle)
			rotateZ(angle)
			box(250)
		  pop()
		} */

		//Texturing with text
		