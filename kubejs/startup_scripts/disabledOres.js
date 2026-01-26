//to test this as of 11/10/2024, make a world of seed 1872 and teleport to -857 51 416 with and without this script loaded in

WorldgenEvents.remove(event=>{
    event.removeOres(props=>{
        props.blocks = ['ihmt:cassiterite_ore','ihmt:cassiterite_ore','ihmt:bauxite_ore','ihmt:deepslate_bauxite_ore']
    })
})