const buttonSubmit = document.getElementById('button-submit');
const buttonScore = document.querySelectorAll('.button-score');
const card = document.getElementById('card');

let selectedValue;

const updateCard = (value) => {
  card.innerHTML = `
    <div class="flex flex-col items-center gap-6">
      <img src="./images/illustration-thank-you.svg" alt="icon-star">

      <p class="text-xs bg-[#272E38] text-[#FA7D21] rounded-full p-2.5 pl-5 pr-5">You selected ${value} out of 5</p>

      <h1 class="text-white text-2xl">Thank you!</h1>

      <p class="text-[#7B8390] text-base text-center">
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
        touch!
      </p>

      <div class="text-center text-xs flex flex-col text-white">
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Challenge by Frontend Mentor.</a>
        <a class="flex justify-center text-blue-hsl" href="#">Coded by Rosa Piñeros <svg data-testid="Icon"
            class="fill-current stroke-none h-4 w-4 text-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            stroke-width="0" focusable="false" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
            </path>
          </svg></a>
      </div>
    </div>
  `;
};


for (const buttonScoreNode of buttonScore) {
  buttonScoreNode.addEventListener('click', (event) => {
    event.preventDefault();
    selectedValue = event.target.textContent;
    buttonSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      updateCard(selectedValue);
    });
  });
}

