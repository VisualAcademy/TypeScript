var Groups;
(function (Groups) {
    Groups[Groups["Administrators"] = 0] = "Administrators";
    Groups[Groups["Users"] = 1] = "Users";
    Groups[Groups["Guests"] = 2] = "Guests";
})(Groups || (Groups = {}));
console.log(Groups.Administrators);
console.log(Groups.Users);
console.log(Groups.Guests);
//# sourceMappingURL=Groups.js.map