class UserProfile {
    // The email address of the user
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    // Validates the email format (simple validation)
    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Sets the user's email if it's valid
    public setEmail(email: string): void {
        if (this.isValidEmail(email)) {
            this.email = email;
        } else {
            throw new Error('Invalid email format');
        }
    }

    // Retrieves the user's email
    public getEmail(): string {
        return this.email;
    }
}

// Usage
try {
    const userProfile = new UserProfile("Shanna@melissa.tv");
    console.log(userProfile.getEmail());
} catch (error) {
    console.error(error);
}
