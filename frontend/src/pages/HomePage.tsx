import { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

import CourtSVG from '../components/CourtSVG';
import PlayerList from '../components/PlayersList';

const HomePage = () => {
    // Generiere 20 Spieler als Beispiel-Mockdaten
    const initialPlayers = Array.from({ length: 20 }, (_, i) => `Spieler ${i + 1}`);
    const [players] = useState<string[]>(initialPlayers);
    const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);

    // Auslosungslogik (Max. 12 Spieler)
    const handleDraw = () => {
        const shuffled = [...players].sort(() => 0.5 - Math.random());
        // Auswahl der ersten 12 Spieler
        setSelectedPlayers(shuffled.slice(0, 12));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Badminton Auslosung
            </Typography>

            <Button
                variant="contained"
                color="primary"
                onClick={handleDraw}
                sx={{ mb: 3 }}
            >
                Auslosung starten
            </Button>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: 'center',
                }}
            >
                {[1, 2, 3].map((courtNumber) => (
                    <Box
                        key={courtNumber}
                        sx={{
                            flex: { xs: '0 0 100%', md: '0 0 30%' }, // ca. 3 Spalten im Desktop-Modus
                            maxWidth: { xs: '100%', md: '30%' },
                        }}
                    >
                        <CourtSVG
                            courtNumber={courtNumber}
                            // Bei Doppelspiel erwartet CourtSVG 4 Spieler, andernfalls 2
                            players={selectedPlayers.slice((courtNumber - 1) * 4, courtNumber * 4)}
                        />
                    </Box>
                ))}
            </Box>

            <PlayerList players={players} />
        </Container>
    );
};

export default HomePage;