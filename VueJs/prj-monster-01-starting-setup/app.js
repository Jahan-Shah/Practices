function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            logMessages: [],
            monsterHealth: 100,
            playerHealth: 100,
            numberOfRounds: 0,
            winner: null
        }
    },
    computed: {
        monsterHealthBar() {
            return { '--value': this.monsterHealth };
        },
        playerHealthBar() {
            return { '--value': this.playerHealth };
        },
        mayUseSPAttack() {
            return this.numberOfRounds % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0)
                this.winner = 'draw';
            else if (value <= 0)
                this.winner = 'monster';
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0)
                this.winner = 'draw';
            else if (value <= 0)
                this.winner = 'player';
        }
    },
    methods: {
        attackMonster() {
            const attackvalue = getRandomValue(5, 12);
            this.monsterHealth -= attackvalue;
            this.addLogMessage('player', 'attack', attackvalue);
            this.attackPlayer();
        },
        attackPlayer() {
            this.numberOfRounds++;
            const attackvalue = getRandomValue(8, 15);
            this.playerHealth -= attackvalue;
            this.addLogMessage('monster', 'attack', attackvalue);

        },
        specialAttackMonster() {
            const attackvalue = getRandomValue(10, 25);
            this.monsterHealth -= attackvalue;
            this.addLogMessage('player', 'attack', attackvalue);

            this.attackPlayer();
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20);
            this.playerHealth + healValue > 100 ?
                this.playerHealth = 100 :
                this.playerHealth += healValue;

            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        endGame() {
            this.logMessages = [];
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.numberOfRounds = 0;
            this.winner = null;
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
});
app.mount('#game');