# 🚆 Train Seat Booking System

A web-based **Train Seat Booking System** that allows users to book seats in a train coach with real-time availability updates. This project follows the specifications provided in the assignment brief, enabling users to reserve up to 7 seats in a row with priority, or across multiple rows if necessary. The app is simple, efficient, and user-friendly!

![image](https://github.com/user-attachments/assets/b78432f7-ea73-43aa-86e8-77bf5806a43f)


## ✨ Features

- 🪑 **Real-Time Seat Booking**: Dynamically display available and booked seats in a train coach.
- 🌈 **Color-Coded Status**: Green for available seats and red for booked seats.
- 📊 **Optimal Booking**: Automatically prioritizes booking multiple seats in a single row.
- 🧮 **Handles Booking Logic**: Seamlessly handles bookings across rows when required seats are not available in the same row.
- 👨‍💻 **Simple & Responsive UI**: A clean, responsive interface for desktop and mobile browsers.
  
## 🚀 Demo
Check out the live version of the app here: [Live Demo](https://your-demo-link.com)

## 🛠️ Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/train-seat-booking.git
   cd train-seat-booking
   ```

2. Open the project folder and double-click `index.html` to run it in your browser.

## 💻 Usage

1. **View Available Seats**: The seat layout is displayed in a grid format with each seat represented as a button.
   
2. **Input Number of Seats**: Enter the number of seats you wish to book in the input field (max 7).
   
3. **Book Seats**: Click on the "Book Seats" button, and the system will book the best available seats for you (in a row if possible, otherwise nearby seats).

4. **Booking Result**: After booking, a message will show which seats were booked, and the grid will update to reflect the new seat status.

## 🧩 Project Structure

- `index.html`: The main HTML file that renders the page structure.
- `styles.css`: Handles the styling of the seat layout and overall design.
- `script.js`: Contains the JavaScript logic for seat booking and dynamically updating the seat grid.

## 🔗 Key Functionalities

### 1. **Seat Rendering Logic**:
The seat layout is created dynamically with a 2D array in JavaScript. There are 80 seats in total, with 7 seats in each of the first 11 rows and 3 seats in the final row.

### 2. **Booking Algorithm**:
- When a user requests seats, the system first tries to book them in the same row.
- If not enough seats are available in one row, the system finds nearby seats in the next rows.
- Once seats are booked, the availability is updated in real-time.

### 3. **Responsive Design**:
The app is styled to be responsive and works across devices, ensuring a seamless user experience on both desktop and mobile screens.

## 🎨 Visual Overview

Here is a quick breakdown of how the seat layout is represented:

```
Row 1:  [1-1] [1-2] [1-3] [1-4] [1-5] [1-6] [1-7]
Row 2:  [2-1] [2-2] [2-3] [2-4] [2-5] [2-6] [2-7]
...
Row 12: [12-1] [12-2] [12-3]
```
- Available seats are displayed in **green**.
- Booked seats are marked in **red**.

## 📚 Assumptions

- A person can book up to **7 seats** at a time.
- If the requested number of seats isn’t available in one row, the system automatically assigns seats in nearby rows.
- Seats are booked on a first-come, first-served basis until the coach is full.

## 📝 Future Improvements

- Implement backend functionality for persistent booking.
- Add login functionality for users to manage their bookings.
- Enhance UI with animations and more seat customization options.
- Introduce an admin panel for resetting seat availability.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

1. Fork the repo.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## 🧑‍💻 Technologies Used

- **HTML5**: Structure of the page.
- **CSS3**: Styling and layout of the seat grid.
- **JavaScript (ES6)**: Logic for booking and seat management.

🎉 **Thank you for using the Train Seat Booking System!** If you enjoyed it, don't forget to ⭐ the repository!

