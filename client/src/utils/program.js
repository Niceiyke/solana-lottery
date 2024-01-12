import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import {AnchorProvider, BN, Program} from '@project-serum/anchor'
import { LOTTERY_SEED, MASTER_SEED, PROGRAM_ID, TICKET_SEED } from "./constants"



export const getProgram =async(connection,wallet)=>{
    const provider = new AnchorProvider(connection,wallet,{commitment:"confirmed"});
    const program =new Program(IDL,PROGRAM_ID,provider)
    return program
}


export const getMasterAddress=()=>{
    return PublicKey.findProgramAddressSync([Buffer.from(MASTER_SEED)],PROGRAM_ID)[0]
}

export const getLotteryAddress=(id)=>{
    return (PublicKey.findProgramAddressSync([Buffer.from(LOTTERY_SEED),new BN(id).toArrayLike(Buffer,"le",4)],PROGRAM_ID))[0];
}

export const getTicketAddress= (lotteryPk,id)=>{
    return (PublicKey.findProgramAddressSync([Buffer.from(TICKET_SEED),lotteryPk.toBuffer(),new BN(id).toArrayLike(Buffer,"le",4)],PROGRAM_ID))[0]
}

export const  getTotalPrize =async(lottery)=>{

    return new BN(lottery.lastTicketId).mul(lottery.ticketPrice).div(new BN(LAMPORTS_PER_SOL)).toString()
}