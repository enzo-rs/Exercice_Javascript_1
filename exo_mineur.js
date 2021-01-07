function verification(age) {
    if (age < 18) {
        console.log("Site interdit aux mineurs.")
    }
    else {
        console.log("Vous pouvez entrer!")
    }
}

verification(18);