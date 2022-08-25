module FarmersWorld::Sale {
    use std::signer;
    struct RoundInfo has key {
        register_start_time: u64,
        register_end_time: u64,
    }

    public fun set_round(account: &signer,round_info: &RoundInfo) {
        move_to(account, RoundInfo {
            register_start_time: round_info.register_start_time,
            register_end_time: round_info.register_end_time
        })
    } 
}