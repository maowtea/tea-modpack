/* //Doesn't work

// Script written by Chatgpt, modified by Onmod
BlockEvents.rightClicked(event => {
  const { player, item, block, level, pos } = event;

  // Only proceed if the item used is flint and steel
  if (item.id === 'minecraft:flint_and_steel') {

    // Only explode specific block (e.g., TNT)
    if (block.id === 'kubejs:gunpowder_barrel') {

      // Optionally damage the flint and steel
      item.damage(1, player);

      // Explode at the center of the block
      level.explode(pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 6.0, true, 'block');

      // Remove the block
      level.setBlock(pos, 'minecraft:air');
    }
  }
});
*/