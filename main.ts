player.onChat("stalker", function () {
        // 1. Get the player's position and calculate a spot right behind them
            let playerPos = player.position()
                let spawnPos = playerPos.add(pos(0, 0, -2))
                    
                        // 2. Send a creepy, distorted chat message
                            player.say("H e l l o . . .  I  s e e  y o u . . .")
                                
                                    // 3. Play an eerie thunder sound right at your ears
                                        

                                            
                                                // 4. Spawn a mob behind you holding a Diamond Axe
                                                    mobs.spawn(ZOMBIE, spawnPos)
                                                        mobs.applyEffect(INVISIBILITY, mobs.target(NEAREST_PLAYER), 10, 1)
                                                        })
                                                        player.onChat("run", function () {
	
})
