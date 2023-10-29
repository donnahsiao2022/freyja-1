import { Router } from 'express';
import * as RoomController from '@/controllers/room';

const router = Router();

router.post(
    /**
     * #swagger.description  = "新增房型"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                name: "尊爵雙人房",
                description: "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
                content: "私人衛浴 • 市景 • 免費盥洗用品 • 淋浴間 • 空調 • 毛巾 • 床單 • 床邊插座....",
                imageUrl: "https://fakeimg.pl/300/",
                imageUrlList: [
                    "https://fakeimg.pl/300/",
                    "https://fakeimg.pl/300/",
                    "https://fakeimg.pl/300/",
                ],
                areaInfo: "24坪",
                bedInfo: "一張大床",
                maxPeople: 4,
                price: 10000,
            }
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": {
                    "name": "尊爵雙人房",
                    "description": "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
                    "content": "私人衛浴 • 市景 • 免費盥洗用品 • 淋浴間 • 空調 • 毛巾 • 床單 • 床邊插座....",
                    "imageUrl": "https://fakeimg.pl/300/",
                    "imageUrlList": [
                        "https://fakeimg.pl/300/",
                        "https://fakeimg.pl/300/",
                        "https://fakeimg.pl/300/"
                    ],
                    "areaInfo": "24坪",
                    "bedInfo": "一張大床",
                    "maxPeople": 4,
                    "price": 10000,
                    "_id": "653e4661336cdccc752127a0",
                    "createdAt": "2023-10-29T11:47:45.641Z",
                    "updatedAt": "2023-10-29T11:47:45.641Z"
                }
            }
        }
     * #swagger.responses[400] = {
            schema: {
                "status": false,
                "message": "new validation failed: price: price 未填寫",
            }
        }
     */
    '/',
    RoomController.createOneRoom
);

router.put(
    /**
     * #swagger.description  = "修改房型"
     * #swagger.parameters['body'] = {
            in: 'body',
            schema: {
                name: "景觀雙人房",
                description: "景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。",
                content: "私人衛浴 • 市景 • 免費盥洗用品 • 淋浴間 • 空調 • 毛巾 • 床單 • 床邊插座....",
                imageUrl: "https://fakeimg.pl/300/",
                imageUrlList: [
                    "https://fakeimg.pl/300/",
                    "https://fakeimg.pl/300/",
                    "https://fakeimg.pl/300/",
                ],
                areaInfo: "28坪",
                bedInfo: "兩張大床",
                maxPeople: 4,
                price: 18000,
            }
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": {
                    "name": "尊爵雙人房",
                    "description": "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
                    "content": "私人衛浴 • 市景 • 免費盥洗用品 • 淋浴間 • 空調 • 毛巾 • 床單 • 床邊插座....",
                    "imageUrl": "https://fakeimg.pl/300/",
                    "imageUrlList": [
                        "https://fakeimg.pl/300/",
                        "https://fakeimg.pl/300/",
                        "https://fakeimg.pl/300/"
                    ],
                    "areaInfo": "24坪",
                    "bedInfo": "一張大床",
                    "maxPeople": 4,
                    "price": 10000,
                    "_id": "653e4661336cdccc752127a0",
                    "createdAt": "2023-10-29T11:47:45.641Z",
                    "updatedAt": "2023-10-29T11:47:45.641Z"
                }
            }
        }
     * #swagger.responses[400] = {
            schema: {
                "status": false,
                "message": "new validation failed: price: price 未填寫",
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此房型不存在",
            }
        }
     */
    '/:id',
    RoomController.updateRoomById
);

router.delete(
    /**
     * #swagger.description  = "刪除房型"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": {
                    "name": "尊爵雙人房",
                    "description": "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
                    "content": "私人衛浴 • 市景 • 免費盥洗用品 • 淋浴間 • 空調 • 毛巾 • 床單 • 床邊插座....",
                    "imageUrl": "https://fakeimg.pl/300/",
                    "imageUrlList": [
                        "https://fakeimg.pl/300/",
                        "https://fakeimg.pl/300/",
                        "https://fakeimg.pl/300/"
                    ],
                    "areaInfo": "24坪",
                    "bedInfo": "一張大床",
                    "maxPeople": 4,
                    "price": 10000,
                    "_id": "653e4661336cdccc752127a0",
                    "createdAt": "2023-10-29T11:47:45.641Z",
                    "updatedAt": "2023-10-29T11:47:45.641Z"
                }
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此房型不存在",
            }
        }
     */
    '/:id',
    RoomController.deleteRoomById
);

export default router;
