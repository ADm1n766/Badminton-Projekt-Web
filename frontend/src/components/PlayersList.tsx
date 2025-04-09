import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

type PlayersListProps = {
    players: string[];
};

const PlayerList = ({ players }: PlayersListProps) => {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Alle Spieler</Typography>
            <List>
                {players.map((player, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={player} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default PlayerList;
