const character = {
	name: 'Snortleblat',
	class: 'Swamp Beast Diplomat',
	level: 1,
	health: 100,
	image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
	attacked() {
		if (this.health === 0) {
			return `${this.name} has already died.`;
		}

		this.health = Math.max(0, this.health - 20);
		return this.health === 0
			? `${this.name} has died.`
			: `${this.name} took 20 damage.`;
	},
	levelUp() {
		this.level += 1;
		return `${this.name} reached level ${this.level}.`;
	}
};

const nameValue = document.querySelector('#character-name');
const classValue = document.querySelector('#character-class');
const portrait = document.querySelector('.portrait');
const healthValue = document.querySelector('#character-health');
const levelValue = document.querySelector('#character-level');
const healthTrack = document.querySelector('.health-track');
const healthFill = document.querySelector('#health-fill');
const statusMessage = document.querySelector('#status-message');
const attackButton = document.querySelector('#attack-button');

function renderCharacter(message) {
	nameValue.textContent = character.name;
	classValue.textContent = character.class;
	portrait.src = character.image;
	portrait.alt = `${character.name}, a ${character.class.toLowerCase()}, in a misty marsh`;
	healthValue.textContent = character.health;
	levelValue.textContent = character.level;
	healthTrack.setAttribute('aria-valuenow', character.health);
	healthFill.style.width = `${character.health}%`;
	healthFill.classList.toggle('is-low', character.health <= 40);
	statusMessage.textContent = message;
	statusMessage.classList.toggle('is-dead', character.health === 0);
	attackButton.disabled = character.health === 0;
}

attackButton.addEventListener('click', () => {
	renderCharacter(character.attacked());
});

document.querySelector('#level-button').addEventListener('click', () => {
	renderCharacter(character.levelUp());
});

renderCharacter('Ready for the next adventure.');
