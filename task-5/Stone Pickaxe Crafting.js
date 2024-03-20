function stonePick(arr) {
  const wood = Math.floor(arr.filter((item) => item === "Wood").length * 4);
  const sticks = Math.floor(
    (arr.filter((item) => item === "Sticks").length + wood) / 2
  );
  const cobblestone = Math.floor(
    arr.filter((item) => item === "Cobblestone").length / 3
  );
  return cobblestone > sticks ? sticks : cobblestone;
}
