<h1 class="font-bold mb-3 text-2xl">Sign up for a new CPSC Account</h1>

<form class="flex flex-col w-1/3" method="post">
    <label for="email">Your email:</label>
    <input name="email" type="email" required>

    <label for="name">Your name</label>
    <input name="name" type="text" required>

    <label for="contact">Contact Number</label>
    <input name="contact" type="tel" required>

    <label for="password">Your password:</label>
    <input name="password" type="password" required>

    <label for="role"></label>
    <select name="role">
        <option value="Investigator">Investigator</option>
        <option value="Manager">Manager</option>
    </select>

    <button type="submit">Submit</button>
</form>

<style>
    input, select {
        margin-bottom: 5%;
    }

    button {
        background-color: blue;
        color: white;
        width: 40%;
        justify-self: center;
        padding: 1%;
    }
</style>