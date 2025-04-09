import { Box, Typography } from '@mui/material';

type CourtSVGProps = {
    courtNumber: number;
    players: string[];
};

const CourtSVG = ({ courtNumber, players }: CourtSVGProps) => {
    // Wenn Spieler mehr als 2 sind, wird von einem Doppelspiel ausgegangen.
    const isDouble = players.length >= 4;

    return (
        <Box sx={{ border: '2px solid', p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Feld {courtNumber}</Typography>

            <svg width="100%" height="200px" viewBox="0 0 100 100">
                {/* Beispielhafte Darstellung eines Spielfelds */}
                <rect x="10" y="10" width="80" height="80" fill="none" stroke="black" />

                {/* Spielerpositionen */}
                {isDouble ? (
                    <>
                        <text x="20" y="20" fontSize="8">
                            A: {players[0] || ''}
                        </text>
                        <text x="20" y="80" fontSize="8">
                            B: {players[1] || ''}
                        </text>
                        <text x="60" y="20" fontSize="8">
                            C: {players[2] || ''}
                        </text>
                        <text x="60" y="80" fontSize="8">
                            D: {players[3] || ''}
                        </text>
                    </>
                ) : (
                    <>
                        <text x="20" y="50" fontSize="8">
                            A: {players[0] || ''}
                        </text>
                        <text x="60" y="50" fontSize="8">
                            B: {players[1] || ''}
                        </text>
                    </>
                )}
            </svg>
        </Box>
    );
};

export default CourtSVG;