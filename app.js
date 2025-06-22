const connectBtn = document.getElementById('connectBtn');
const walletAddress = document.getElementById('walletAddress');

connectBtn.addEventListener('click', async () => {
  try {
    const { solana } = window;

    if (solana && solana.isPhantom) {
      const response = await solana.connect();
      walletAddress.textContent = `Connected: ${response.publicKey.toString()}`;
      walletAddress.classList.remove('hidden');
    } else {
      alert('Please install the Phantom Wallet extension!');
    }
  } catch (err) {
    console.error(err);
    alert('Connection failed!');
  }
});
