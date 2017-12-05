## Parity Light Client configuration for Events

### Setup:
```
parity -c validator1.toml
parity -c validator2.toml
parity -c node.toml
parity -c light.toml
```

Deploy event contract to network:
- visit `localhost:8182`
- enable contracts in settings
- develop contract
- paste `contracts/event.sol` and compile
- note contract address

Listen for events:
- Edit `index.js` with appropriate provider and contract address
- Go back to Parity UI and execute event function

### Observations:
- `pubsub` is definitely not working (out of the box), but we can *request* past events - interestingly they show as `pending`, though they have definitely been mined.
- At times see 0 hdr/s on light client logs, as if no headers are being imported. 
- The state of the light client is always unclear. Calling `call()` from the client's user account results in an `Unable to get latest block` error yet `isSyncing()` returns false. Deleting the light client's chain data seemingly has no impact as upon restart, the client will be fully synced. Other peculiarities include the light client showing as connected to 'genesis.json' rather than the chain name like the other full nodes do.