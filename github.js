class GitHub {
    static clientSecret = '31ffdb73ecfe5d4e6ba246c2162234f2e68fc13c';
    static clientId = 'a053aaa36e62c8312c01';

    static async getUser (userName) {
        const res = await fetch(`https://api.github.com/users/${userName}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const profile = await res.json();
        return {
            profile
        };
    }
}