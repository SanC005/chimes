import { useRouter } from "next/router"
export default function CustomProfile() {
    const router = useRouter();
    const {username} = router.query;
    return (
            <div>Hi {username}!</div>

    )
}
