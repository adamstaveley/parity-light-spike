## Parity Light Client configuration for Events

### Setup:
```
parity -c validator1.toml
parity -c validator2.toml
parity -c node.toml
parity -c light.toml
```

Deploy event contract to network:
- visit [localhost:8182](localhost:8182)
- enable contracts in settings
- develop contract
- paste contracts/event.sol and compile
- note contract address

Listen for events:
- Edit `index.js` with new contract address
- `node index.js`
- Go back to Parity UI and execute event function

### Observations:
- `pubsub` is definitely not working (out of the box), but we can *request* past events - interestingly they show as `pending`, though they have definitely been mined
- We see 0 hdr/s on light client logs, as if no headers are being imported