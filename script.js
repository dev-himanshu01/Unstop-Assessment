const rows = [
    [1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1]              
];

const seatContainer = document.getElementById('seat-container');
const bookingResult = document.getElementById('booking-result');

function renderSeats() {
    seatContainer.innerHTML = ''; 
    rows.forEach((row, rowIndex) => {
        row.forEach((seat, seatIndex) => {
            const seatDiv = document.createElement('div');
            seatDiv.classList.add('seat');
            seatDiv.textContent = `${rowIndex + 1}-${seatIndex + 1}`;
            if (seat === 0) seatDiv.classList.add('booked'); 
            seatContainer.appendChild(seatDiv);
        });
    });
}

function bookSeats() {
    const numSeats = parseInt(document.getElementById('numSeats').value);

    if (isNaN(numSeats) || numSeats < 1 || numSeats > 7) {
        bookingResult.textContent = 'Please enter a valid number of seats (1-7).';
        bookingResult.style.color = 'red';
        return;
    }

    let bookedSeats = [];
    for (let i = 0; i < rows.length; i++) {
        let availableSeats = 0;
        for (let j = 0; j < rows[i].length; j++) {
            if (rows[i][j] === 1) availableSeats++; 
        }

        if (availableSeats >= numSeats) {
            for (let j = 0; j < rows[i].length; j++) {
                if (rows[i][j] === 1 && bookedSeats.length < numSeats) {
                    rows[i][j] = 0;  
                    bookedSeats.push(`${i + 1}-${j + 1}`);  
                }
            }
            break;
        }
    }

    if (bookedSeats.length < numSeats) {
        bookedSeats = [];
        for (let i = 0; i < rows.length && bookedSeats.length < numSeats; i++) {
            for (let j = 0; j < rows[i].length && bookedSeats.length < numSeats; j++) {
                if (rows[i][j] === 1) {
                    rows[i][j] = 0;  
                    bookedSeats.push(`${i + 1}-${j + 1}`);  
                }
            }
        }
    }

    if (bookedSeats.length === numSeats) {
        bookingResult.textContent = `Booked seats: ${bookedSeats.join(', ')}`;
        bookingResult.style.color = 'darkgreen';
    } else {
        bookingResult.textContent = 'Unable to book the requested number of seats.';
        bookingResult.style.color = 'red';
    }

    renderSeats();
}

renderSeats();
