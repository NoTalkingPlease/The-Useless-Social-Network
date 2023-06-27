const catPostsContainer = document.getElementById('cat-posts');

// Fetch fake cat pictures from the API
fetch('https://api.thecatapi.com/v1/images/search?limit=6')
  .then(response => response.json())
  .then(data => {
    data.forEach(cat => {
      const username = generateUsername();
      const caption = generateCaption();

      const catPost = document.createElement('div');
      catPost.classList.add('cat-post');

      const catImage = document.createElement('img');
      catImage.src = cat.url;
      catImage.alt = 'Cat Picture';

      const usernameElement = document.createElement('div');
      usernameElement.classList.add('username');
      usernameElement.textContent = username;

      const captionElement = document.createElement('div');
      captionElement.classList.add('caption');
      captionElement.textContent = caption;

      catPost.appendChild(catImage);
      catPost.appendChild(usernameElement);
      catPost.appendChild(captionElement);

      catPostsContainer.appendChild(catPost);
    });
  })
  .catch(error => {
    console.error('Error fetching cat pictures:', error);
  });

// Generate a random username
function generateUsername() {
  const adjectives = ['Crazy', 'Silly', 'Bizarre', 'Wacky', 'Quirky'];
  const nouns = ['Kitten', 'Whiskers', 'Paw', 'Feline', 'Meow'];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} ${randomNoun}`;
}

// Generate a random caption
function generateCaption() {
  const captions = [
    'Just another pointless cat picture',
    'Look at this adorable fluffiness!',
    'Can you believe how cute this cat is?',
    'I wish I had a cat like this!',
    'Cats make the world a better place',
    'Cat lovers unite!'
  ];

  return captions[Math.floor(Math.random() * captions.length)];
}
