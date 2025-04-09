import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material';


export const RulesPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>Badminton Regeln</Typography>

            <Accordion>
                    <Typography>Spielsystem</Typography>
                <AccordionDetails>
                    <Typography>21-Punkte-System, max. 30 Minuten pro Spiel ....</Typography>
                </AccordionDetails>
            </Accordion>

            {/* Weitere Accordions für Regelpunkte */}
        </Container>
    );
};

export default RulesPage