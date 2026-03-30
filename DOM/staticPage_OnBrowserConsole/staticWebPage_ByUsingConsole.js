document.title="simple static page"
document.body.style.backgroundColor="#282c34"
h1heading=document.createElement('h1')
h1heading.textContent="Welcome to my dynamic web page"
h1heading.style.color="white"
document.body.appendChild(h1heading)
h1heading.style.color="orange"

img=document.createElement('img');
img.src='https://img.freepik.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg?semt=ais_hybrid&w=740&q=80';
img.style.width='100vw';
img.style.height='50vh';
img.style.objectFit='cover';
img.style.display='block';
img.style.margin='0 auto';
document.body.appendChild(img);

myParagraph = document.createElement('p');
myParagraph.textcontent="This page is fully created by using javascript."
myParagraph.style.color="#ddd"
myParagraph.style.fontSize="1.2rem"
myParagraph.style.maxWidth='600px'
myParagraph.style.color="white"
document.body.appendChild(myParagraph);
myParagraph.textContent = "This page is fully created by using javascript."
myParagraph.style.textAlign='center';

newButton = document.createElement("button");
newButton.textContent = "Click Me";
newButton.style.margin='20px auto'
newButton.style.padding='12px 24px'
newButton.style.fontSize='1rem'
newButton.style.border='none'
newButton.style.borderRadius='8px';
newButton.style.cursor='pointer';
newButton.style.backgroundColor='#ff9800';
newButton.style.color='white';
newButton.style.boxShadow='2px 2px 10px rgba(0,0,0,0.3)';
document.body.appendChild(newButton);
newButton.addEventListener('mouseover', function() {
   newButton.style.backgroundColor ='#e65100';
});

newButton.addEventListener('mouseout', function() {
  newButton.style.backgroundColor = '#ff9800';  
});

document.body.appendChild(newButton);

card1 = document.createElement('div');
card1.style.width='300px';
card1.style.margin='20px auto';
card1.style.padding='20px';
card1.style.borderRadius='12px';
card1.style.boxShadow='0 5px 15px rgba(0,0,0,0.2)';
card1.style.backgroundColor='#333';
card1.style.textAlign='#center';
document.body.appendChild(card1);

cardTitle=document.createElement('h2');
cardTitle.textContent='Javascript Rocks!';
cardTitle.style.color='#ff9800';
card1.appendChild(cardTitle);

cardText=document.createElement('p');
cardText.textContent="This card was created using Javascript!"
cardText.style.color="white"
cardText.style.fontSize="1rem"
cardText.style.marginTop="10px"
card1.appendChild(cardText);

document.body.style.display="flex";
document.body.style.flexDirection="column";
document.body.style.alignItems="center";
document.body.style.justifyContent="center";


